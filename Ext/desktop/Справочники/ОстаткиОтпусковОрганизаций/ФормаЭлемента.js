Ext.define('Справочники.ОстаткиОтпусковОрганизаций.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 406,width: 346,
	iconCls: 'bogus',
	title: 'Остатки отпусков сотрудника',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:346px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:381px;width:346px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:58px;width:330px;height:315px;',
			height: 315,width: 330,
			items:
			[
				{
					title:'ОдинОтпуск',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОстатков',
			style: 'position:absolute;left:96px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоДней',
			style: 'position:absolute;left:96px;top:84px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ДетальныйВвод',
			text: 'Детальный ввод остатков >>',
			style: 'position:absolute;left:155px;top:294px;width:175px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Рассчитать',
			text: 'Рассчитать',
			style: 'position:absolute;left:239px;top:82px;width:91px;height:21px;',
		},
					]
				},
				{
					title:'НесколькоОтпусков',
					items:
					[
		{
			xtype: 'button',
			name: 'ДетальныйВвод1',
			text: 'Детальный ввод остатков >>',
			style: 'position:absolute;left:155px;top:294px;width:175px;height:21px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОстатковПоВидамОтпусков',
			style: 'position:absolute;left:96px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:111px;width:330px;height:178px;',
			height: 178,width: 330,
			columns:
			[
				{
					text:'ВидЕжегодногоОтпуска',
				},
				{
					text:'Количество',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:82px;width:210px;height:24px;',
			items:
			[
				{
					text:'Рассчитать',
				},
			]
		},
					]
				},
				{
					title:'ОтпускаСРабочимиГодами',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:330px;height:206px;',
			height: 206,width: 330,
			columns:
			[
				{
					text:'ВидЕжегодногоОтпуска',
				},
				{
					text:'ГодРаботы',
				},
				{
					text:'ДатаНачалаРабочегоГода',
				},
				{
					text:'ДатаОкончанияРабочегоГода',
				},
				{
					text:'Количество',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:210px;height:24px;',
			items:
			[
				{
					text:'Удалить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Рассчитать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Добавить',
				},
			]
		},
		{
			xtype: 'button',
			name: 'ПростойВвод',
			text: '<< Простой ввод остатков',
			style: 'position:absolute;left:155px;top:294px;width:175px;height:21px;',
		},
					]
				},
			]
		},
	]
});