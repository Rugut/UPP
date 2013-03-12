Ext.define('Справочники.СтатьиДвиженияДенежныхСредств.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:625px;height:323px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Статьи движения денежных средств',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:164px;top:33px;width:453px;height:282px;',
			height: 282,width: 453,
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
			style: 'position:absolute;left:0px;top:0px;width:625px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие',
				},
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
					width:'220',
				},
			]
		},
	]
});