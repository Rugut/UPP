Ext.define('Справочники.НастройкиФормированияДокументовПоОрдерам.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 317,width: 561,
	iconCls: 'bogus',
	title: 'Настройка формирования документов по ордерам',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:57px;width:455px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:98px;top:33px;width:455px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:265px;width:455px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:561px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:292px;width:561px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:545px;height:173px;',
			height: 173,width: 545,
			items:
			[
				{
					title:'Отбор',
				},
				{
					title:'Параметры',
				},
				{
					title:'Расписание',
				},
			]
		},
	]
});