Ext.define('Обработки.ПомощникПланирования.ФормаРежимСложенияОбъединения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:251px;height:246px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:221px;width:251px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'заказов',
			style: 'position:absolute;left:13px;top:74px;width:230px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'подразделений',
			style: 'position:absolute;left:13px;top:98px;width:230px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'проектов',
			style: 'position:absolute;left:13px;top:122px;width:230px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'контрагентов',
			style: 'position:absolute;left:13px;top:146px;width:230px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'договоров',
			style: 'position:absolute;left:13px;top:170px;width:230px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'периодов',
			style: 'position:absolute;left:13px;top:194px;width:230px;height:19px;',
		},
	]
});