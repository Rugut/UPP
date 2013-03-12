Ext.define('Отчеты.Диаграмма.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:487px;height:282px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки диаграммы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:257px;width:487px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Тип диаграммы:',
			style: 'position:absolute;left:14px;top:30px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоОграничения',
			style: 'position:absolute;left:372px;top:54px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Ограничивать серии:',
			style: 'position:absolute;left:14px;top:54px;width:112px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоЗначенияКоличествоОграничения',
			text: 'Значение:',
			style: 'position:absolute;left:310px;top:54px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПослеЗначенияКоличествоОграничения',
			text: 'единиц',
			style: 'position:absolute;left:434px;top:54px;width:44px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:122px;width:471px;height:127px;',
			height: 127,width: 471,
			items:
			[
				{
					title:'Круговая',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидПодписи',
			text: 'Вид подписи:',
			style: 'position:absolute;left:6px;top:0px;width:128px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РаздвижениеСекторов',
			text: 'Раздвижение секторов:',
			style: 'position:absolute;left:6px;top:24px;width:128px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Окантовка',
			style: 'position:absolute;left:6px;top:48px;width:78px;height:15px;',
		},
					]
				},
				{
					title:'КруговаяОбъемная',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидПодписи1',
			text: 'Вид подписи:',
			style: 'position:absolute;left:6px;top:0px;width:128px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РаздвижениеСекторов1',
			text: 'Раздвижение секторов:',
			style: 'position:absolute;left:6px;top:24px;width:128px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Окантовка',
			style: 'position:absolute;left:6px;top:48px;width:80px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Свет',
			style: 'position:absolute;left:6px;top:68px;width:48px;height:15px;',
		},
					]
				},
				{
					title:'ГистограммаПлоская',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Базовое значение:',
			style: 'position:absolute;left:6px;top:24px;width:128px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовоеЗначение',
			style: 'position:absolute;left:136px;top:24px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Режим пробелов:',
			style: 'position:absolute;left:6px;top:0px;width:128px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Окантовка',
			style: 'position:absolute;left:6px;top:48px;width:80px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Градиент',
			style: 'position:absolute;left:6px;top:68px;width:72px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вертикальные метки',
			style: 'position:absolute;left:6px;top:88px;width:132px;height:15px;',
		},
					]
				},
				{
					title:'ГистограммаОбъемная',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Базовое значение:',
			style: 'position:absolute;left:6px;top:24px;width:128px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовоеЗначение1',
			style: 'position:absolute;left:136px;top:24px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Режим пробелов:',
			style: 'position:absolute;left:6px;top:0px;width:128px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Окантовка',
			style: 'position:absolute;left:6px;top:48px;width:80px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Свет',
			style: 'position:absolute;left:6px;top:68px;width:48px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вертикальные метки',
			style: 'position:absolute;left:6px;top:88px;width:132px;height:15px;',
		},
					]
				},
				{
					title:'Изометрическая',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Базовое значение:',
			style: 'position:absolute;left:6px;top:48px;width:128px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовоеЗначение2',
			style: 'position:absolute;left:136px;top:48px;width:58px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Ориентация:',
			style: 'position:absolute;left:6px;top:0px;width:128px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Окантовка',
			style: 'position:absolute;left:6px;top:72px;width:81px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Свет',
			style: 'position:absolute;left:6px;top:92px;width:48px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Режим пробелов:',
			style: 'position:absolute;left:6px;top:24px;width:128px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вертикальные метки',
			style: 'position:absolute;left:6px;top:112px;width:132px;height:15px;',
		},
					]
				},
				{
					title:'График',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Базовое значение:',
			style: 'position:absolute;left:6px;top:0px;width:128px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовоеЗначение3',
			style: 'position:absolute;left:136px;top:0px;width:60px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вертикальные метки',
			style: 'position:absolute;left:6px;top:24px;width:132px;height:15px;',
		},
					]
				},
				{
					title:'ГрафикСЗаливкой',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Базовое значение:',
			style: 'position:absolute;left:6px;top:0px;width:128px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовоеЗначение4',
			style: 'position:absolute;left:136px;top:0px;width:60px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Окантовка',
			style: 'position:absolute;left:6px;top:24px;width:80px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вертикальные метки',
			style: 'position:absolute;left:6px;top:44px;width:132px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Легенда',
			style: 'position:absolute;left:414px;top:30px;width:65px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Серии в строках',
			style: 'position:absolute;left:14px;top:78px;width:108px;height:15px;',
		},
	]
});