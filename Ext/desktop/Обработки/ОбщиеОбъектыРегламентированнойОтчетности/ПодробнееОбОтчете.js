Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ПодробнееОбОтчете',
	{
	extend: 'Ext.window.Window',
	height: 403,width: 527,
	iconCls: 'bogus',
	title: 'Подробнее об отчете',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:378px;width:527px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Справка',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:28px;width:511px;height:256px;',
			height: 256,width: 511,
			items:
			[
				{
					title:'СтраницаИнформацияОФормахДоступна',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:511px;height:166px;',
			height: 166,width: 511,
			columns:
			[
				{
					text:'ОписаниеОтчета',
				},
				{
					text:'ДатаНачалоДействия',
				},
				{
					text:'ДатаКонецДействия',
				},
				{
					text:'ФормаОтчета',
				},
			]
		},
					]
				},
				{
					title:'СтраницаИнформацияОФормахНЕДоступна',
					items:
					[
					]
				},
			]
		},
	]
});