Ext.define('Справочники.ВидыОплатЧекаККМ.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:601px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Виды оплат чека ККМ',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:434px;height:280px;',
			height: 280,width: 434,
			columns:
			[
				{
					text:'',
					width:'33',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Тип оплаты',
					width:'115',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:145px;height:280px;',
			height: 280,width: 145,
			columns:
			[
				{
					text:'Наименование',
					width:'141',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:601px;height:25px;',
			items:
			[
			]
		},
	]
});