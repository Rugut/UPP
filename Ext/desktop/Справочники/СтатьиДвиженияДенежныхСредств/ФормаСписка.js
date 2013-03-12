Ext.define('Справочники.СтатьиДвиженияДенежныхСредств.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:605px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Статьи движения денежных средств',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:164px;top:33px;width:433px;height:280px;',
			height: 280,width: 433,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Вид движения денежных средств',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:605px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:150px;height:280px;',
			height: 280,width: 150,
			columns:
			[
				{
					text:'Наименование',
					width:'350',
				},
			]
		},
	]
});