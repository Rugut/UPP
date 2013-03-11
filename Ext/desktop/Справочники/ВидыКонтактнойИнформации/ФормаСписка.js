Ext.define('Справочники.ВидыКонтактнойИнформации.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 261,width: 636,
	iconCls: 'bogus',
	title: 'Виды контактной информации',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:620px;height:220px;',
			height: 220,width: 620,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Тип',
				},
				{
					text:'Наименование',
				},
				{
					text:'ВидОбъектаКонтактнойИнформации',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:636px;height:25px;',
			items:
			[
			]
		},
	]
});