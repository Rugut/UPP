Ext.define('Справочники.СтатьиЗатрат.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:708px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Статьи затрат',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:182px;top:33px;width:518px;height:280px;',
			height: 280,width: 518,
			columns:
			[
				{
					text:'',
					width:'34',
				},
				{
					text:'Код',
					width:'72',
				},
				{
					text:'Наименование',
					width:'173',
				},
				{
					text:'Вид затрат',
					width:'100',
				},
				{
					text:'Статус мат. затрат',
					width:'116',
				},
				{
					text:'Характер затрат',
					width:'126',
				},
				{
					text:'Вид расходов (НУ)',
					width:'140',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:708px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:167px;height:280px;',
			height: 280,width: 167,
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