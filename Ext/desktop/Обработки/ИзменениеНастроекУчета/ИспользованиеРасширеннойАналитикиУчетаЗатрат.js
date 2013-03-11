Ext.define('Обработки.ИзменениеНастроекУчета.ИспользованиеРасширеннойАналитикиУчетаЗатрат',
	{
	extend: 'Ext.window.Window',
	height: 442,width: 498,
	iconCls: 'bogus',
	title: 'Установка параметра учета ""Использовать расширенную аналитику учета затрат""',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:417px;width:498px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Назад',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Далее',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ИзменитьНастройку',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:1px;width:498px;height:416px;',
			height: 416,width: 498,
			items:
			[
				{
					title:'ВыборРежима',
					items:
					[
					]
				},
				{
					title:'ИзменитьНастройкуВыборочная',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеПериодаРегистрации',
			style: 'position:absolute;left:304px;top:6px;width:137px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:118px;width:486px;height:109px;',
			height: 109,width: 486,
			columns:
			[
				{
					text:'РазделУчета',
				},
				{
					text:'УУ',
				},
				{
					text:'БУ',
				},
				{
					text:'НУ',
				},
				{
					text:'РазделУчетаИмя',
				},
				{
					text:'РассчитанУУ',
				},
				{
					text:'РассчитанБУ',
				},
				{
					text:'РассчитанНУ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:93px;width:370px;height:24px;',
			items:
			[
				{
					text:'СнятьФлажки',
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
					text:'ОбновитьТаблицу',
				},
				{
					text:'УстановитьФлажки',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:293px;width:486px;height:117px;',
			height: 117,width: 486,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'РегистрЗатрат',
				},
				{
					text:'РазделУчетаПредставление',
				},
				{
					text:'Ссылка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:266px;width:486px;height:24px;',
			items:
			[
				{
					text:'СнятьФлажки',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ИзменитьОтборСпискаДокументов',
				},
				{
					text:'Удалить',
				},
				{
					text:'УстановитьФлажки',
				},
			]
		},
					]
				},
				{
					title:'ИзменитьНастройкуПолная',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеПериодаРегистрацииПолныйРежим',
			style: 'position:absolute;left:355px;top:30px;width:137px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:53px;width:488px;height:89px;',
			height: 89,width: 488,
			items:
			[
				{
					title:'ОтключениеРежима',
					items:
					[
					]
				},
				{
					title:'РасчетНеОкончен',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'РежимИспользованияРасширеннойАналитики',
					items:
					[
					]
				},
				{
					title:'НастройкаАналитикиУчетаЗатрат',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:486px;height:386px;',
			height: 386,width: 486,
			columns:
			[
				{
					text:'Наименование',
				},
				{
					text:'УправленческийУчет',
				},
				{
					text:'РегламентированныйУчет',
				},
			]
		},
					]
				},
			]
		},
	]
});