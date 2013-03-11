Ext.define('Документы.ЗаявкаНаСертификациюНоменклатуры.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 620,
	iconCls: 'bogus',
	title: 'Заявки на сертификацию номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:604px;height:280px;',
			height: 280,width: 604,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'ВидОперации',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'СерияНоменклатуры',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:620px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});