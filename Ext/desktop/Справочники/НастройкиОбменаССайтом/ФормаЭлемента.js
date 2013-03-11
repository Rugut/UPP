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
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:79px;width:478px;height:116px;',
			height: 116,width: 478,
			items:
			[
				{
					title:'СтраницаКаталог',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КаталогВыгрузки',
			style: 'position:absolute;left:84px;top:0px;width:394px;height:20px;',
		},
					]
				},
				{
					title:'СтраницаСайт',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'HTTPВыгрузкаПароль',
			style: 'position:absolute;left:311px;top:26px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'HTTPВыгрузкаИмяПользователя',
			style: 'position:absolute;left:84px;top:26px;width:176px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'HTTPОбменАдресСкрипта',
			style: 'position:absolute;left:84px;top:0px;width:394px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'HTTPОбменПроксиИмяПользователя',
			style: 'position:absolute;left:84px;top:97px;width:176px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'HTTPОбменПроксиПорт',
			style: 'position:absolute;left:311px;top:74px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'HTTPОбменПроксиСервер',
			style: 'position:absolute;left:84px;top:74px;width:176px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'HTTPОбменПроксиПароль',
			style: 'position:absolute;left:311px;top:97px;width:167px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Проверить',
			text: 'Проверить...',
			style: 'position:absolute;left:356px;top:50px;width:122px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'НастройкаРегламентногоЗадания',
			text: 'Дополнительные настройки расписания ...',
			style: 'position:absolute;left:255px;top:341px;width:229px;height:24px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:14px;top:225px;width:468px;height:24px;',
			height: 24,width: 468,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УзелОбменаТоварами',
			style: 'position:absolute;left:135px;top:0px;width:268px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:14px;top:249px;width:468px;height:25px;',
			height: 25,width: 468,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УзелОбменаЗаказами',
			style: 'position:absolute;left:135px;top:0px;width:268px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ВыгрузкаТоваров',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:52px;width:478px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:78px;width:478px;height:360px;',
			height: 360,width: 478,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
					]
				},
				{
					title:'ОбменЗаказами',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:185px;top:51px;width:299px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:185px;top:75px;width:299px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:185px;top:99px;width:299px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаДляНовыхКонтрагентов',
			style: 'position:absolute;left:185px;top:144px;width:299px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаДляНовойНоменклатуры',
			style: 'position:absolute;left:185px;top:168px;width:299px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмеренияНовойНоменклатуры',
			style: 'position:absolute;left:185px;top:192px;width:299px;height:19px;',
		},
					]
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