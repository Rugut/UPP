Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЭлектронныеПредставленияРегламентированныхОтчетов_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:848px;height:443px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Электронные представления регламентированных отчетов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:111px;width:832px;height:192px;',
			height: 192,width: 832,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Наименование',
					width:'100',
				},
				{
					text:'Вид отчета',
					width:'100',
				},
				{
					text:'Период',
					width:'100',
				},
				{
					text:'Организация',
					width:'83',
				},
				{
					text:'Тип пол.',
					width:'62',
				},
				{
					text:'Пол.',
					width:'62',
				},
				{
					text:'Вид',
					width:'36',
				},
				{
					text:'Комментарий',
					width:'87',
				},
				{
					text:'Дата импорта',
					width:'124',
				},
				{
					text:'Периодичность',
					width:'118',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:848px;height:25px;',
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'Журнал обмена',
				},
				{
					text:'Действие8',
				},
				'-',
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Дополнительный отбор',
				},
				{
					text:'Отображать панель обмена',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'&Загрузить',
				},
				{
					text:'Скопировать',
				},
				'-',
				'-',
				'-',
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:56px;width:832px;height:25px;',
			height: 25,width: 832,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:236px;top:1px;width:596px;height:21px;',
			height: 21,width: 596,
			items:
			[
				{
					title:'По виду отчета',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОтчета',
			style: 'position:absolute;left:0px;top:1px;width:596px;height:19px;',
		},
					]
				},
				{
					title:'По периоду отчета',
				},
				{
					title:'По виду документа',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:310px;top:1px;width:41px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: '№ корректировки:',
			style: 'position:absolute;left:195px;top:3px;width:111px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Доп. отбор:',
			style: 'position:absolute;left:0px;top:4px;width:77px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДополнительногоОтбора',
			style: 'position:absolute;left:82px;top:2px;width:147px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:832px;height:30px;',
			height: 30,width: 832,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Год',
			style: 'position:absolute;left:174px;top:4px;width:55px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:832px;height:20px;',
			height: 20,width: 832,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:2px;width:77px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Получатель',
			style: 'position:absolute;left:732px;top:1px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:82px;top:1px;width:488px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипПолучателя',
			style: 'position:absolute;left:646px;top:1px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:309px;width:832px;height:126px;',
			height: 126,width: 832,
			items:
			[
				{
					title:'Страница ФНС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:832px;height:126px;',
			height: 126,width: 832,
			columns:
			[
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Дата создания',
					width:'112',
				},
				{
					text:'Дата завершения',
					width:'112',
				},
				{
					text:'',
					width:'25',
				},
				{
					text:'',
					width:'25',
				},
				{
					text:'',
					width:'25',
				},
				{
					text:'',
					width:'25',
				},
				{
					text:'',
					width:'25',
				},
				{
					text:'',
					width:'25',
				},
				{
					text:'Уведомление об уточнении налоговой декларации (отчета)',
					width:'25',
				},
				{
					text:'Колонка1',
					width:'25',
				},
			]
		},
					]
				},
				{
					title:'Страница заявление',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:832px;height:126px;',
			height: 126,width: 832,
			columns:
			[
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Дата создания',
					width:'112',
				},
				{
					text:'Дата завершения',
					width:'112',
				},
				{
					text:'',
					width:'25',
				},
				{
					text:'',
					width:'25',
				},
				{
					text:'',
					width:'25',
				},
				{
					text:'',
					width:'25',
				},
				{
					text:'',
					width:'25',
				},
				{
					text:'',
					width:'25',
				},
				{
					text:'',
					width:'25',
				},
				{
					text:'',
					width:'25',
				},
				{
					text:'',
					width:'25',
				},
				{
					text:'Колонка1',
					width:'25',
				},
			]
		},
					]
				},
				{
					title:'Страница ПФР',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:832px;height:126px;',
			height: 126,width: 832,
			columns:
			[
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Дата начала',
					width:'112',
				},
				{
					text:'Дата завершения',
					width:'112',
				},
				{
					text:'Первичное сообщение, содержащее файл отчетности',
					width:'25',
				},
				{
					text:'Подтверждение доставки документа в налоговый орган',
					width:'25',
				},
				{
					text:'Протокол',
					width:'25',
				},
				{
					text:'Квитанция на протокол',
					width:'25',
				},
			]
		},
					]
				},
				{
					title:'Страница ФСС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:832px;height:126px;',
			height: 126,width: 832,
			columns:
			[
				{
					text:'Дата начала',
					width:'112',
				},
				{
					text:'Дата завершения',
					width:'112',
				},
				{
					text:'',
					width:'25',
				},
				{
					text:'',
					width:'25',
				},
				{
					text:'Идентификатор',
					width:'192',
				},
			]
		},
					]
				},
				{
					title:'Страница ФСГС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:832px;height:126px;',
			height: 126,width: 832,
			columns:
			[
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Дата начала',
					width:'112',
				},
				{
					text:'Дата завершения',
					width:'112',
				},
				{
					text:'Первичное сообщение, содержащее файл отчетности',
					width:'25',
				},
				{
					text:'Подтверждение даты отправки',
					width:'25',
				},
				{
					text:'Извещение о получении подтверждения даты отправки',
					width:'25',
				},
				{
					text:'Подтверждение доставки документа в орган ФСГС',
					width:'25',
				},
				{
					text:'Протокол',
					width:'25',
				},
				{
					text:'Извещение о получении протокола',
					width:'25',
				},
			]
		},
					]
				},
			]
		},
	]
});