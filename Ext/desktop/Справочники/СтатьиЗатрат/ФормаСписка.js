Ext.define('Справочники.СтатьиЗатрат.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 708,
	iconCls: 'bogus',
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
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'ВидЗатрат',
				},
				{
					text:'СтатусМатериальныхЗатрат',
				},
				{
					text:'ХарактерЗатрат',
				},
				{
					text:'ВидЗатратНалоговогоУчета',
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
				},
			]
		},
	]
});