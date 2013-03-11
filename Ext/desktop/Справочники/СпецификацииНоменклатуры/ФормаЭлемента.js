Ext.define('Справочники.СпецификацииНоменклатуры.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 444,width: 652,
	iconCls: 'bogus',
	title: 'Спецификации номенклатуры',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:468px;top:58px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:58px;width:330px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'Настройка',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'УстановитьОсновнуюСпецификацию',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ВерсииСпецификации',
				},
				{
					text:'СоздатьВерсию',
				},
				{
					text:'Заполнить',
				},
				{
					text:'ПоСпецификации',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ЗаполнитьПоФактическимЗатратам',
				},
				{
					text:'ПодменюВидаСпецификации',
				},
				{
					text:'Подменю2',
				},
				{
					text:'УстановитьОсновнуюСпецификациюНаДату',
				},
				{
					text:'Файлы',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:419px;width:652px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:33px;width:550px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодВерсии',
			style: 'position:absolute;left:604px;top:58px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:392px;width:550px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:102px;width:636px;height:285px;',
			height: 285,width: 636,
			items:
			[
				{
					title:'Полная',
				},
				{
					title:'Узел',
				},
			]
		},
	]
});