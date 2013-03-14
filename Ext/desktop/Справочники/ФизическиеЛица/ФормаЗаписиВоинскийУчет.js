﻿Ext.define('Справочники.ФизическиеЛица.ФормаЗаписиВоинскийУчет',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:430px;height:376px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Воинский учет',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Запись о данных воинского учета действует с:',
			style: 'position:absolute;left:8px;top:324px;width:314px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:322px;top:324px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Отношение к воинской обязанности:',
			style: 'position:absolute;left:8px;top:8px;width:192px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтношениеКВоинскойОбязанности',
			style: 'position:absolute;left:202px;top:8px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Отношение к воинскому учету:',
			style: 'position:absolute;left:14px;top:198px;width:186px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтношениеКВоинскомуУчету',
			style: 'position:absolute;left:202px;top:198px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Годность к военной службе:',
			style: 'position:absolute;left:172px;top:126px;width:147px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Годность',
			style: 'position:absolute;left:322px;top:126px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Воинское звание:',
			style: 'position:absolute;left:14px;top:80px;width:186px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Звание',
			style: 'position:absolute;left:202px;top:80px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Забронирован организацией:',
			style: 'position:absolute;left:14px;top:289px;width:186px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗабронированОрганизацией',
			style: 'position:absolute;left:202px;top:289px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Наличие мобпредписания',
			style: 'position:absolute;left:14px;top:223px;width:156px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Военкомат:',
			style: 'position:absolute;left:14px;top:150px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Военкомат',
			style: 'position:absolute;left:88px;top:150px;width:334px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'ВУС:',
			style: 'position:absolute;left:14px;top:126px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВУС',
			style: 'position:absolute;left:88px;top:126px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:351px;width:430px;height:25px;',
			items:
			[
				{
					text:'История...',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Категория запаса:',
			style: 'position:absolute;left:14px;top:54px;width:186px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КатегорияЗапаса',
			style: 'position:absolute;left:202px;top:54px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Состав (профиль):',
			style: 'position:absolute;left:14px;top:102px;width:186px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состав',
			style: 'position:absolute;left:202px;top:102px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Номер команды, партии:',
			style: 'position:absolute;left:14px;top:242px;width:186px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКомандыПартии',
			style: 'position:absolute;left:202px;top:242px;width:220px;height:19px;',
		},
	]
});