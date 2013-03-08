Ext.define('Документы.РегламентированныйОтчет.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 425,width: 688,
	iconCls: 'bogus',
	title: 'Регламентированные отчеты',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:107px;top:36px;width:573px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода1',
			style: 'position:absolute;left:110px;top:398px;width:570px;height:19px;',
		},
	]
});