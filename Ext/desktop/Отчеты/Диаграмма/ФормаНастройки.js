Ext.require(['Данные.Отчеты.Диаграмма'], function () 
{
	Ext.define('Отчеты.Диаграмма.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:487px;height:282px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройки диаграммы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:128px;top:30px;width:280px;height:19px;',
			width: 280,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Тип диаграммы:',
			style: 'position:absolute;left:14px;top:30px;width:112px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:128px;top:54px;width:180px;height:19px;',
			width: 180,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоОграничения',
			style: 'position:absolute;left:372px;top:54px;width:60px;height:19px;',
			width: 60,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Ограничивать серии:',
			style: 'position:absolute;left:14px;top:54px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоЗначенияКоличествоОграничения',
			text: 'Значение:',
			style: 'position:absolute;left:310px;top:54px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьПослеЗначенияКоличествоОграничения',
			text: 'единиц',
			style: 'position:absolute;left:434px;top:54px;width:44px;height:19px;text-align:left;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:122px;width:471px;height:127px;',
			height: 127,width: 471,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:136px;top:0px;width:335px;height:19px;',
			width: 335,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьВидПодписи',
			text: 'Вид подписи:',
			style: 'position:absolute;left:6px;top:0px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РаздвижениеСекторов',
			text: 'Раздвижение секторов:',
			style: 'position:absolute;left:6px;top:24px;width:128px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:136px;top:24px;width:335px;height:19px;',
			width: 335,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Окантовка',
			style: 'position:absolute;left:6px;top:48px;width:78px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:136px;top:0px;width:335px;height:19px;',
			width: 335,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьВидПодписи1',
			text: 'Вид подписи:',
			style: 'position:absolute;left:6px;top:0px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РаздвижениеСекторов1',
			text: 'Раздвижение секторов:',
			style: 'position:absolute;left:6px;top:24px;width:128px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:136px;top:24px;width:335px;height:19px;',
			width: 335,
			height: 19,
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
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Базовое значение:',
			style: 'position:absolute;left:6px;top:24px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'БазовоеЗначение',
			style: 'position:absolute;left:136px;top:24px;width:60px;height:19px;',
			width: 60,
			height: 19,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:136px;top:0px;width:335px;height:19px;',
			width: 335,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Режим пробелов:',
			style: 'position:absolute;left:6px;top:0px;width:128px;height:19px;text-align:left;',
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
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Базовое значение:',
			style: 'position:absolute;left:6px;top:24px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'БазовоеЗначение1',
			style: 'position:absolute;left:136px;top:24px;width:60px;height:19px;',
			width: 60,
			height: 19,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:136px;top:0px;width:335px;height:19px;',
			width: 335,
			height: 19,
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
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Базовое значение:',
			style: 'position:absolute;left:6px;top:48px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'БазовоеЗначение2',
			style: 'position:absolute;left:136px;top:48px;width:58px;height:19px;',
			width: 58,
			height: 19,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:136px;top:0px;width:335px;height:19px;',
			width: 335,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Ориентация:',
			style: 'position:absolute;left:6px;top:0px;width:128px;height:19px;text-align:left;',
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
			xtype: 'combobox',
			style: 'position:absolute;left:136px;top:24px;width:335px;height:19px;',
			width: 335,
			height: 19,
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
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Базовое значение:',
			style: 'position:absolute;left:6px;top:0px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'БазовоеЗначение3',
			style: 'position:absolute;left:136px;top:0px;width:60px;height:19px;',
			width: 60,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вертикальные метки',
			style: 'position:absolute;left:6px;top:24px;width:132px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Базовое значение:',
			style: 'position:absolute;left:6px;top:0px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'БазовоеЗначение4',
			style: 'position:absolute;left:136px;top:0px;width:60px;height:19px;',
			width: 60,
			height: 19,
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
		{
			xtype: 'label',
			text: 'Общие',
			style: 'position:absolute;left:8px;top:8px;width:471px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Индивидуальные, для текущего типа диаграммы',
			style: 'position:absolute;left:8px;top:101px;width:471px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:257px;width:487px;height:25px;',
			width: 487,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});