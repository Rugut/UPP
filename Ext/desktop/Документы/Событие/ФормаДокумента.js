Ext.define('Документы.Событие.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:618px;height:430px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документ',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:91px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:99px;top:33px;width:73px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:172px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:192px;top:33px;width:128px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:354px;width:91px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:99px;top:354px;width:511px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:618px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:405px;width:618px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:378px;width:91px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:99px;top:378px;width:511px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОбъекта',
			style: 'position:absolute;left:422px;top:33px;width:188px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Вид объекта:',
			style: 'position:absolute;left:332px;top:33px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:83px;width:602px;height:266px;',
			height: 266,width: 602,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоСобытия',
			style: 'position:absolute;left:414px;top:6px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОкончаниеСобытия',
			style: 'position:absolute;left:414px;top:30px;width:180px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'СодержаниеСобытия',
			style: 'position:absolute;left:90px;top:126px;width:504px;height:114px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'напомнить за:',
			style: 'position:absolute;left:322px;top:54px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОписаниеСобытия',
			style: 'position:absolute;left:90px;top:102px;width:504px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:304px;height:96px;',
			height: 96,width: 304,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Контрагенты',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Контрагент:',
			style: 'position:absolute;left:0px;top:0px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:84px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтактноеЛицо1',
			text: 'Контак. лицо:',
			style: 'position:absolute;left:0px;top:48px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтактноеЛицо',
			style: 'position:absolute;left:84px;top:48px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтактнаяИнформацияКонтактногоЛица',
			style: 'position:absolute;left:84px;top:72px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтактнаяИнформацияКонтрагента',
			style: 'position:absolute;left:84px;top:24px;width:220px;height:19px;',
		},
					]
				},
				{
					title:'Прочие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтактноеЛицо1',
			style: 'position:absolute;left:84px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтактнаяИнформацияКонтактногоЛица1',
			style: 'position:absolute;left:84px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтактноеЛицо',
			text: 'Контак. лицо:',
			style: 'position:absolute;left:0px;top:0px;width:84px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Кандидаты',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтактноеЛицо2',
			style: 'position:absolute;left:84px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтактнаяИнформацияКонтактногоЛица2',
			style: 'position:absolute;left:84px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтактноеЛицо2',
			text: 'Кандидат:',
			style: 'position:absolute;left:0px;top:0px;width:84px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:322px;top:78px;width:272px;height:24px;',
			height: 24,width: 272,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИсточникИнформации',
			text: 'Источник :',
			style: 'position:absolute;left:0px;top:0px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИсточникИнформацииПриОбращении',
			style: 'position:absolute;left:92px;top:0px;width:180px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:414px;top:54px;width:180px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОснование',
			text: 'Основание:',
			style: 'position:absolute;left:6px;top:6px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Важность:',
			style: 'position:absolute;left:6px;top:81px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Важность',
			style: 'position:absolute;left:90px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Основание',
			style: 'position:absolute;left:90px;top:6px;width:504px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Помещение:',
			style: 'position:absolute;left:330px;top:56px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Помещение',
			style: 'position:absolute;left:414px;top:56px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'Территория:',
			style: 'position:absolute;left:6px;top:56px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Территория',
			style: 'position:absolute;left:90px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:330px;top:81px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:414px;top:81px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредмет',
			text: 'Предмет:',
			style: 'position:absolute;left:6px;top:31px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Предмет',
			style: 'position:absolute;left:90px;top:31px;width:504px;height:19px;',
		},
					]
				},
				{
					title:'Участники',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:252px;height:194px;',
			height: 194,width: 252,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Работник',
					width:'222',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:263px;top:46px;width:331px;height:194px;',
			height: 194,width: 331,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Контрагент',
					width:'142',
				},
				{
					text:'Лицо',
					width:'158',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:252px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:263px;top:22px;width:331px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеСобытия',
			text: 'Состояние :',
			style: 'position:absolute;left:332px;top:58px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СостояниеСобытия',
			style: 'position:absolute;left:422px;top:58px;width:188px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГруппаСобытия',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:58px;width:91px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаСобытия',
			style: 'position:absolute;left:99px;top:58px;width:221px;height:19px;',
		},
	]
});