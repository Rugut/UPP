Ext.define('Справочники.НастройкиФормированияДокументовВыпускаПродукции.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:754px;height:385px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки формирования документов выпуска продукции',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:258px;top:33px;width:488px;height:344px;',
			height: 344,width: 488,
			columns:
			[
				{
					text:'',
					width:'33',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:754px;height:25px;',
			items:
			[
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие9',
				},
				'-',
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Действия формы выбрать',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие8',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:244px;height:344px;',
			height: 344,width: 244,
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