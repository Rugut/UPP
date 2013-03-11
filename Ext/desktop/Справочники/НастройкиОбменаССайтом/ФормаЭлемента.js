Ext.define('Справочники.НастройкиОбменаССайтом.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 579,width: 690,
	iconCls: 'bogus',
	title: 'Настройки обмена с WEB-сайтом',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:690px;height:25px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'ОткрытьМониторОбменов',
				},
				{
					text:'Подменю',
				},
				{
					text:'ДействиеВыполнитьОбмен',
				},
				{
					text:'ДействиеВыполнитьОбмен',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ОткрытьМониторОбменов',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:554px;width:690px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:190px;top:58px;width:492px;height:464px;',
			height: 464,width: 492,
			items:
			[
				{
					title:'СтраницаПараметры',
				},
				{
					title:'ВыгрузкаТоваров',
				},
				{
					title:'ОбменЗаказами',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:269px;top:527px;width:413px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:642px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:276px;top:33px;width:323px;height:19px;',
		},
	]
});