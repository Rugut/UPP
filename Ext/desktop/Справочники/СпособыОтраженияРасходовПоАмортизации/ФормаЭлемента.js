Ext.define('Справочники.СпособыОтраженияРасходовПоАмортизации.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 616,
	iconCls: 'bogus',
	title: 'Способы отражения расходов',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:568px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:430px;height:19px;',
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
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРаспределенияЗатратНаВыпуск',
			style: 'position:absolute;left:228px;top:80px;width:380px;height:19px;',
		},
	]
});