Ext.define('Справочники.НаправленияСписанияВыпущеннойПродукции.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 616,
	iconCls: 'bogus',
	title: 'Направления списания выпущенной продукции (услуг)',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:544px;top:33px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:406px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:398px;width:514px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:514px;height:19px;',
		},
	]
});