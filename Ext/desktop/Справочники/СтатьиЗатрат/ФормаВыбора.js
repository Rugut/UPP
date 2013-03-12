Ext.define('Справочники.СтатьиЗатрат.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:728px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Статьи затрат',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:546px;height:280px;',
			height: 280,width: 546,
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
					width:'180',
				},
				{
					text:'Вид затрат',
					width:'120',
				},
				{
					text:'Статус мат. затрат',
					width:'116',
				},
				{
					text:'Характер затрат',
					width:'120',
				},
				{
					text:'Вид расходов (НУ)',
					width:'140',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:728px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:280px;',
			height: 280,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'184',
				},
			]
		},
	]
});