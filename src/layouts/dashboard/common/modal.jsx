import React, { useState } from 'react'
import { Modal, Box } from '@mui/material'
import Invitestate from 'src/components/modal/invitestate'
import { useApp } from 'src/AppContext'
import InviteAgencies from 'src/components/modal/inviteAgencies'
import PropTypes from 'prop-types'




const CustomerModal = ({
  handleClose,
  sx
}) => {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [branchName, setBranchName] = useState('')
  const [seletedbranch, setSeletedBranch] = useState('')
  const [Fullname, setFullname] = useState('')
  const [Email, setEmail] = useState('')
  const [seletedRole, setSeletedRole] = useState('')

  const { open, modalType, } = useApp()

  // const { handleInviteUser, isInviting, handleInviteOrderRoles } = useInvite()

  const getModalHeight = () => {
    switch (modalType) {
      case 'add-branch':
        return '500px'
      case 'onboard-manager':
        return '75%'
      default:
        return 'auto'
    }
  }

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 1,
    height: getModalHeight(), // Set dynamic height based on modalType
    overflowY: 'auto', // Add scrolling for overflow content
    ...sx
  }

  const renderModalContent = () => {
    switch (modalType) {

      case 'create-state':
        return <Invitestate />
      case 'create-agencies':
        return <InviteAgencies />

      default:
        return null
    }
  }

  return (
    <Modal
      sx={{
        bgcolor: 'rgba(225, 225, 225, .2)', // Very dark, almost black background
        backdropFilter: 'blur(5px)', // Optional: adds a slight blur effect
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      open={open}
      onClose={handleClose}
    >
      <Box sx={modalStyle}>{renderModalContent()}</Box>
    </Modal>
  )
}

CustomerModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  sx: PropTypes.object
};

export default CustomerModal
