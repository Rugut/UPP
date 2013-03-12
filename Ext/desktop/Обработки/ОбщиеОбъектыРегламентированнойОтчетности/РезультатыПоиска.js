Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.РезультатыПоиска',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:728px;height:235px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Результаты поиска',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:728px;height:25px;',
			items:
			[
				{
					text:'Назад',
				},
				{
					text:'Вперед',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:25px;width:728px;height:210px;',
			height: 210,width: 728,
			columns:
			[
				{
					text:'Наименование раздела',
					width:'255',
				},
				{
					text:'№ листа',
					width:'87',
				},
				{
					text:'Найдено в строке',
					width:'374',
				},
				{
					text:'Ячейка',
					width:'185',
				},
				{
					text:'Раздел',
					width:'63',
				},
				{
					text:'СтрокаПП',
					width:'58',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНайдено',
			text: '',
			style: 'position:absolute;left:100px;top:5px;width:622px;height:15px;',
		},
	]
});