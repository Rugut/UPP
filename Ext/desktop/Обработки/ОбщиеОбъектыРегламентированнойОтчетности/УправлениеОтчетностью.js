Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.УправлениеОтчетностью',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:443px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регламентированная и финансовая отчетность',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:32px;width:219px;height:403px;',
			height: 403,width: 219,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:1px;width:219px;height:318px;',
			height: 318,width: 219,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Виды отчетов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:44px;width:219px;height:268px;',
			height: 268,width: 219,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Наименование',
					width:'200',
				},
				{
					text:'Пометка удаления',
					width:'100',
				},
				{
					text:'ЭтоГруппа',
					width:'100',
				},
				{
					text:'Ссылка',
					width:'100',
				},
				{
					text:'Источник отчета',
					width:'100',
				},
				{
					text:'Описание',
					width:'100',
				},
				{
					text:'Внешний',
					width:'100',
				},
				{
					text:'Периоды',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:18px;width:219px;height:24px;',
			items:
			[
				{
					text:'Новый',
				},
				'-',
				{
					text:'Снять пометки',
				},
				{
					text:'Установить пометки',
				},
				{
					text:'Развернуть все узлы',
				},
				{
					text:'Свернуть все узлы',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Подробнее об отчете',
				},
				'-',
				{
					text:'Иерархический просмотр',
				},
			]
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:232px;top:32px;width:540px;height:404px;',
			height: 404,width: 540,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:2px;top:313px;width:538px;height:90px;',
			height: 90,width: 538,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:5px;width:328px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Организации:',
			style: 'position:absolute;left:10px;top:5px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодИФНС',
			style: 'position:absolute;left:479px;top:5px;width:56px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'ИФНС:',
			style: 'position:absolute;left:422px;top:5px;width:56px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'период:',
			style: 'position:absolute;left:10px;top:32px;width:72px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:84px;top:27px;width:454px;height:62px;',
			height: 62,width: 454,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:452px;height:60px;',
			height: 60,width: 452,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Произвольный период',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:304px;top:23px;width:20px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаПериодаОтчета',
			style: 'position:absolute;left:123px;top:23px;width:76px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонцаПериодаОтчета',
			style: 'position:absolute;left:223px;top:23px;width:76px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеВводаС',
			text: 'с',
			style: 'position:absolute;left:113px;top:23px;width:10px;height:20px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц1',
			text: 'Янв',
			style: 'position:absolute;left:91px;top:33px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц3',
			text: 'I кв',
			style: 'position:absolute;left:148px;top:33px;width:28px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц5',
			text: 'Май',
			style: 'position:absolute;left:209px;top:33px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц7',
			text: 'Июл',
			style: 'position:absolute;left:268px;top:33px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц9',
			text: 'III кв',
			style: 'position:absolute;left:324px;top:33px;width:32px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц11',
			text: 'Ноя',
			style: 'position:absolute;left:387px;top:33px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц2',
			text: 'Фев',
			style: 'position:absolute;left:120px;top:33px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц4',
			text: 'Апр',
			style: 'position:absolute;left:179px;top:33px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц6',
			text: 'II кв',
			style: 'position:absolute;left:237px;top:33px;width:28px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц8',
			text: 'Авг',
			style: 'position:absolute;left:298px;top:33px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц10',
			text: 'Окт',
			style: 'position:absolute;left:357px;top:33px;width:25px;height:17px;text-align:center;',
		},
					]
				},
				{
					title:'Стандартный период',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьГод',
			text: 'Год:',
			style: 'position:absolute;left:0px;top:7px;width:23px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Год',
			style: 'position:absolute;left:29px;top:4px;width:60px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц12',
			text: 'IV кв',
			style: 'position:absolute;left:414px;top:33px;width:32px;height:17px;text-align:center;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'radio',
			boxLabel: 'по итогам:',
			style: 'position:absolute;left:10px;top:52px;width:72px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'произвольный',
			style: 'position:absolute;left:10px;top:70px;width:96px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:540px;height:313px;',
			height: 313,width: 540,
			items:
			[
				{
					title:'Журнал отчетов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:5px;top:26px;width:526px;height:129px;',
			height: 129,width: 526,
			columns:
			[
				{
					text:'',
					width:'22',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'',
					width:'32',
				},
				{
					text:'Наименование отчета',
					width:'120',
				},
				{
					text:'Период',
					width:'120',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'ИФНС',
					width:'48',
				},
				{
					text:'Вид',
					width:'36',
				},
				{
					text:'Комментарий',
					width:'120',
				},
				{
					text:'Дата',
					width:'120',
				},
				{
					text:'Дата начала',
					width:'84',
				},
				{
					text:'Дата окончания',
					width:'93',
				},
				{
					text:'Периодичность',
					width:'110',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:5px;top:1px;width:526px;height:24px;',
			items:
			[
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Групповой режим',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Отображать панель обмена',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:5px;top:161px;width:526px;height:126px;',
			height: 126,width: 526,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница ФНС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:526px;height:102px;',
			height: 102,width: 526,
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
				{
					text:'Наименование',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:526px;height:24px;',
			items:
			[
				{
					text:'Обменяться',
				},
				'-',
				'-',
				'-',
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
			style: 'position:absolute;left:0px;top:24px;width:526px;height:102px;',
			height: 102,width: 526,
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
				{
					text:'Наименование',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:526px;height:24px;',
			items:
			[
				{
					text:'Обменяться',
				},
				'-',
				'-',
				'-',
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
			style: 'position:absolute;left:0px;top:0px;width:526px;height:126px;',
			height: 126,width: 526,
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
					title:'Страница Заявление',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:526px;height:102px;',
			height: 102,width: 526,
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
				{
					text:'',
					width:'25',
				},
				{
					text:'',
					width:'25',
				},
				{
					text:'Наименование',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:526px;height:24px;',
			items:
			[
				{
					text:'Обменяться',
				},
				'-',
				'-',
				'-',
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
			style: 'position:absolute;left:0px;top:24px;width:526px;height:102px;',
			height: 102,width: 526,
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
				{
					text:'Наименование',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:526px;height:24px;',
			items:
			[
				{
					text:'Обменяться',
				},
				'-',
				'-',
				'-',
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Журнал выгрузки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:5px;top:26px;width:526px;height:261px;',
			height: 261,width: 526,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Номер',
					width:'96',
				},
				{
					text:'Дата',
					width:'107',
				},
				{
					text:'Период',
					width:'102',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'ИФНС',
					width:'48',
				},
				{
					text:'Комментарий',
					width:'120',
				},
				{
					text:'Период По',
					width:'84',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:5px;top:1px;width:231px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Сохранить',
				},
				'-',
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаОткрытьДокументОтбор',
			text: '',
			style: 'position:absolute;left:512px;top:4px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОчиститьДокументОтбор',
			text: 'Х',
			style: 'position:absolute;left:490px;top:4px;width:19px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'по отчету:',
			style: 'position:absolute;left:166px;top:5px;width:67px;height:15px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'Справочник отчетов',
				},
				'-',
				{
					text:'Календарь',
				},
				'-',
				{
					text:'Информация для пользователей',
				},
				'-',
				{
					text:'Информация об обновлениях',
				},
				'-',
				{
					text:'Настройки',
				},
				'-',
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});