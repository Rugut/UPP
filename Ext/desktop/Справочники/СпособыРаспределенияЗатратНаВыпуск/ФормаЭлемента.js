Ext.define('Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 463,width: 620,
	iconCls: 'bogus',
	title: 'Способы распределения затрат',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:547px;top:33px;width:65px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:177px;top:33px;width:326px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:412px;width:522px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КогдаПрименять',
			style: 'position:absolute;left:177px;top:58px;width:435px;height:70px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаправлениеРаспределения',
			style: 'position:absolute;left:177px;top:158px;width:135px;height:19px;',
		},
	]
});