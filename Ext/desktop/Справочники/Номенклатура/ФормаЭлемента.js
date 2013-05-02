Ext.define('Справочники.Номенклатура.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:616px;height:475px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Элемент Номенклатура',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:526px;top:56px;width:24px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:553px;top:56px;width:55px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:139px;top:56px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:226px;top:56px;width:297px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПолное',
			text: 'Полное наименование:',
			style: 'position:absolute;left:8px;top:196px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:139px;top:196px;width:469px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАртикул',
			text: 'Артикул:',
			style: 'position:absolute;left:139px;top:79px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Артикул',
			style: 'position:absolute;left:226px;top:79px;width:115px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:424px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:424px;width:518px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вести учет по доп.  характеристикам',
			style: 'position:absolute;left:305px;top:102px;width:206px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:616px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
					]
				},
				'-',
				{
					text:'Файлы',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
					]
				},
				'-',
				{
					text:'Файлы',
				},
				'-',
				{
					text:'Изображение',
				},
				'-',
				{
					text:'Справка',
				},
				'-',
				{
					text:'Настройка...',
				},
				'-',
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:226px;top:33px;width:382px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:139px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьБазоваяЕдиницаИзмерения',
			text: 'Базовая ед.:',
			style: 'position:absolute;left:139px;top:102px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазоваяЕдиницаИзмерения',
			style: 'position:absolute;left:226px;top:102px;width:73px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:450px;width:616px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'<< Назад',
				},
				{
					text:'Далее >>',
				},
				'-',
				{
					text:'ОК',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:218px;width:600px;height:201px;',
			height: 201,width: 600,
			items:
			[
				{
					title:'По умолчанию',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНомерГТД',
			text: 'Номер ГТД:',
			style: 'position:absolute;left:302px;top:30px;width:125px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерГТД',
			style: 'position:absolute;left:427px;top:30px;width:165px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтранаПроисхождения',
			text: 'Страна :',
			style: 'position:absolute;left:6px;top:30px;width:125px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтранаПроисхождения',
			style: 'position:absolute;left:131px;top:30px;width:165px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтавкаНДС',
			text: 'НДС:',
			style: 'position:absolute;left:6px;top:6px;width:125px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДС',
			style: 'position:absolute;left:131px;top:6px;width:165px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяЗатрат',
			style: 'position:absolute;left:131px;top:74px;width:165px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяЗатрат',
			text: 'Статья затрат:',
			style: 'position:absolute;left:6px;top:74px;width:125px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатурнаяГруппаЗатрат',
			text: 'Номенклатурная группа затрат:',
			style: 'position:absolute;left:299px;top:70px;width:125px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатурнаяГруппаЗатрат',
			style: 'position:absolute;left:427px;top:74px;width:165px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНазначениеИспользования',
			text: 'Назначение использования:',
			style: 'position:absolute;left:6px;top:146px;width:124px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НазначениеИспользования',
			style: 'position:absolute;left:131px;top:151px;width:461px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаправлениеВыпуска',
			text: 'Направление выпуска:',
			style: 'position:absolute;left:6px;top:98px;width:125px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаправлениеВыпуска',
			style: 'position:absolute;left:131px;top:98px;width:165px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаправлениеСписанияВыпущеннойПродукции',
			text: 'Направление списания выпущенной продукции:',
			style: 'position:absolute;left:299px;top:97px;width:126px;height:29px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаправлениеСписанияВыпущеннойПродукции',
			style: 'position:absolute;left:427px;top:98px;width:165px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмпортер',
			text: 'Импортер:',
			style: 'position:absolute;left:302px;top:6px;width:125px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Импортер',
			style: 'position:absolute;left:427px;top:6px;width:165px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительные',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатурнаяГруппа',
			style: 'position:absolute;left:156px;top:154px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВесовойКоэффициентВхождения',
			style: 'position:absolute;left:512px;top:154px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидВоспроизводства',
			style: 'position:absolute;left:156px;top:6px;width:436px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтветственныйМенеджерЗаПокупки',
			style: 'position:absolute;left:156px;top:30px;width:436px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойПоставщик',
			style: 'position:absolute;left:156px;top:55px;width:436px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатурнаяГруппа',
			text: 'Номенклатурная группа:',
			style: 'position:absolute;left:6px;top:154px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВесовойКоэффициентВхождения',
			text: 'Вес вхождения в группу:',
			style: 'position:absolute;left:378px;top:154px;width:132px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидВоспроизводства',
			text: 'Вид воспроизводства:',
			style: 'position:absolute;left:6px;top:6px;width:148px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственныйМенеджерЗаПокупки',
			text: 'Ответственный за покупки:',
			style: 'position:absolute;left:6px;top:30px;width:148px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОсновнойПоставщик',
			text: 'Основной поставщик:',
			style: 'position:absolute;left:6px;top:55px;width:114px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЦеноваяГруппа',
			text: 'Ценовая группа:',
			style: 'position:absolute;left:6px;top:80px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЦеноваяГруппа',
			style: 'position:absolute;left:156px;top:80px;width:436px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОКП',
			text: 'ОКП:',
			style: 'position:absolute;left:6px;top:104px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОКП',
			style: 'position:absolute;left:156px;top:104px;width:436px;height:19px;',
		},
					]
				},
				{
					title:'Настройка учета',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Вести оперативный учет остатков незавершенного производства',
			style: 'position:absolute;left:6px;top:26px;width:354px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Требуется внутренняя сертификация',
			style: 'position:absolute;left:6px;top:157px;width:208px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Требуется внешняя сертификация',
			style: 'position:absolute;left:258px;top:157px;width:217px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вести учет по сериям в незавершенном производстве',
			style: 'position:absolute;left:6px;top:45px;width:354px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вести серийные номера',
			style: 'position:absolute;left:6px;top:91px;width:209px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокПрисвоенияСерийногоНомера',
			text: 'Порядок присвоения серийного номера:',
			style: 'position:absolute;left:6px;top:109px;width:209px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокПрисвоенияСерийногоНомера',
			style: 'position:absolute;left:218px;top:109px;width:374px;height:19px;',
		},
					]
				},
				{
					title:'Единицы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'70',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'По классификатору',
					width:'120',
					dataIndex:'ЕдиницаПоКлассификатору',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'К.',
					width:'44',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Вес',
					width:'57',
					dataIndex:'Вес',
					flex:1,
				},
				{
					text:'Объем',
					width:'63',
					dataIndex:'Объем',
					flex:1,
				},
				{
					text:'Порог округления',
					width:'70',
					dataIndex:'ПорогОкругления',
					flex:1,
				},
				{
					text:'Предупреждать',
					width:'70',
					dataIndex:'ПредупреждатьОНецелыхМестах',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'ЕдиницаПоКлассификатору',
					},
					{
						name:'Наименование',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'Вес',
					},
					{
						name:'Объем',
					},
					{
						name:'ПорогОкругления',
					},
					{
						name:'ПредупреждатьОНецелыхМестах',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'Редактировать в диалоге',
				},
				'-',
				{
					text:'Просмотр по владельцу',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
				'-',
					]
				},
				{
					text:'Отключить отбор',
				},
				{
					xtype: 'splitbutton',
					text:'Сортировка',
					menu: [
				{
					text:'(Поля сортировки)',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Обновить',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'Редактировать в диалоге',
				},
				'-',
				{
					text:'Просмотр по владельцу',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
					]
				},
				{
					title:'Характеристики',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Серии',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Проекты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Период',
					width:'116',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'213',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Проект',
					width:'234',
					dataIndex:'Проект',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Период',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Проект',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Свойства',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'Свойство',
					width:'119',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Значение',
					width:'220',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Свойство',
					},
					{
						name:'Значение',
					},
				]
			},
		},
					]
				},
				{
					title:'Категории',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Принадлежность',
					flex:1,
				},
				{
					text:'Категория',
					width:'220',
					dataIndex:'Категория',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Принадлежность',
					},
					{
						name:'Категория',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
			]
		},
					]
				},
				{
					title:'Комплектующие',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'Комплектующая номенклатуры',
					width:'220',
					dataIndex:'Комплектующая',
					flex:1,
				},
				{
					text:'Характеристика комплектующей',
					width:'220',
					dataIndex:'ХарактеристикаКомплектующей',
					flex:1,
				},
				{
					text:'Количество',
					width:'64',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Единица',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Комплектующая',
					},
					{
						name:'ХарактеристикаКомплектующей',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				{
					xtype: 'splitbutton',
					text:'Сортировка',
					menu: [
				{
					text:'(Поля сортировки)',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Обновить',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
				'-',
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Подбор',
				},
			]
		},
					]
				},
				{
					title:'Штрихкоды',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Тип штрихкода',
					width:'100',
					dataIndex:'ТипШтрихкода',
					flex:1,
				},
				{
					text:'Штрихкод',
					width:'100',
					dataIndex:'Штрихкод',
					flex:1,
				},
				{
					text:'Единица',
					width:'56',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'144',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия',
					width:'122',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Качество',
					width:'95',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Владелец',
					width:'123',
					dataIndex:'Владелец',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'ТипШтрихкода',
					},
					{
						name:'Штрихкод',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'СерияНоменклатуры',
					},
					{
						name:'Качество',
					},
					{
						name:'Владелец',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'Редактировать в диалоге',
				},
				'-',
				{
					text:'Просмотр по владельцу',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
				'-',
					]
				},
				{
					text:'Отключить отбор',
				},
				{
					xtype: 'splitbutton',
					text:'Сортировка',
					menu: [
				{
					text:'(Поля сортировки)',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Обновить',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'Новый штрихкод',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
					]
				},
				{
					title:'Коды весового товара',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'70',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'202',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия номенклатуры',
					width:'100',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Качество',
					width:'114',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'112',
					dataIndex:'Номенклатура',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'СерияНоменклатуры',
					},
					{
						name:'Качество',
					},
					{
						name:'Номенклатура',
					},
				]
			},
		},
					]
				},
				{
					title:'Места хранения',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:145px;',
			height: 145,width: 586,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Склад',
					width:'257',
					dataIndex:'Склад',
					flex:1,
				},
				{
					text:'Приоритет',
					width:'61',
					dataIndex:'Приоритет',
					flex:1,
				},
				{
					text:'Место хранения',
					width:'241',
					dataIndex:'МестоХранения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Склад',
					},
					{
						name:'Приоритет',
					},
					{
						name:'МестоХранения',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Спецификации',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Версии спецификации',
				},
					]
				},
				'-',
				{
					text:'Создать версию',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Версия',
					width:'40',
					dataIndex:'КодВерсии',
					flex:1,
				},
				{
					text:'Наименование',
					width:'181',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Активная',
					width:'21',
					dataIndex:'Активная',
					flex:1,
				},
				{
					text:'Состояние',
					width:'80',
					dataIndex:'Состояние',
					flex:1,
				},
				{
					text:'Дата утверждения',
					width:'100',
					dataIndex:'ДатаУтверждения',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'100',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'КодВерсии',
					},
					{
						name:'Наименование',
					},
					{
						name:'Активная',
					},
					{
						name:'Состояние',
					},
					{
						name:'ДатаУтверждения',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
					]
				},
				{
					title:'Плановая себестоимость',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:102px;width:586px;height:24px;',
			items:
			[
				'-',
				{
					text:'Рассчитать',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:125px;width:586px;height:48px;',
			height: 48,width: 586,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'120',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Ед.',
					width:'57',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'100',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Валюта',
					width:'60',
					dataIndex:'Валюта',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'Сумма',
					},
					{
						name:'Валюта',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:48px;',
			height: 48,width: 586,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Регистратор',
					width:'100',
					dataIndex:'Регистратор',
					flex:1,
				},
				{
					text:'Тип цен',
					width:'127',
					dataIndex:'ТипЦен',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'120',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Валюта',
					width:'70',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Цена',
					width:'80',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Единица',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Процент скидки или наценки',
					width:'56',
					dataIndex:'ПроцентСкидкиНаценки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Регистратор',
					},
					{
						name:'ТипЦен',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'Валюта',
					},
					{
						name:'Цена',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'ПроцентСкидкиНаценки',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Номенклатура поставщика',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:125px;width:586px;height:48px;',
			height: 48,width: 586,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Записать',
					flex:1,
				},
				{
					text:'Тип цен',
					width:'198',
					dataIndex:'ТипЦен',
					flex:1,
				},
				{
					text:'Цена',
					width:'78',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Валюта',
					width:'72',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Ед.',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Записать',
					},
					{
						name:'ТипЦен',
					},
					{
						name:'Цена',
					},
					{
						name:'Валюта',
					},
					{
						name:'ЕдиницаИзмерения',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДокументУстановкаЦенКонтрагента',
			text: 'Документ установки цен контрагента:',
			style: 'position:absolute;left:6px;top:82px;width:197px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументУстановкаЦенКонтрагента',
			style: 'position:absolute;left:207px;top:82px;width:385px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:101px;width:586px;height:24px;',
			items:
			[
				'-',
				{
					text:'Перечитать текущие цены',
				},
				'-',
				{
					text:'Записать цены',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:48px;',
			height: 48,width: 586,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'172',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Код',
					width:'69',
					dataIndex:'КодНоменклатурыКонтрагента',
					flex:1,
				},
				{
					text:'Артикул',
					width:'97',
					dataIndex:'АртикулНоменклатурыКонтрагента',
					flex:1,
				},
				{
					text:'Наименование',
					width:'194',
					dataIndex:'НаименованиеНоменклатурыКонтрагента',
					flex:1,
				},
				{
					text:'Штрихкод',
					width:'108',
					dataIndex:'ШтрихКодНоменклатурыКонтрагента',
					flex:1,
				},
				{
					text:'Ед. изм.',
					width:'54',
					dataIndex:'ЕдиницаНоменклатурыКонтрагента',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'КодНоменклатурыКонтрагента',
					},
					{
						name:'АртикулНоменклатурыКонтрагента',
					},
					{
						name:'НаименованиеНоменклатурыКонтрагента',
					},
					{
						name:'ШтрихКодНоменклатурыКонтрагента',
					},
					{
						name:'ЕдиницаНоменклатурыКонтрагента',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Цены номенклатуры',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:53px;width:586px;height:96px;',
			height: 96,width: 586,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Записать',
					flex:1,
				},
				{
					text:'Тип цен',
					width:'143',
					dataIndex:'ТипЦен',
					flex:1,
				},
				{
					text:'Цена',
					width:'61',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Способ расчета',
					width:'124',
					dataIndex:'СпособРасчетаЦены',
					flex:1,
				},
				{
					text:'Валюта',
					width:'47',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Ед.',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'% скидки (наценки)',
					width:'72',
					dataIndex:'ПроцентСкидкиНаценки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Записать',
					},
					{
						name:'ТипЦен',
					},
					{
						name:'Цена',
					},
					{
						name:'СпособРасчетаЦены',
					},
					{
						name:'Валюта',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'ПроцентСкидкиНаценки',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:29px;width:586px;height:24px;',
			items:
			[
				{
					text:'Рассчитать по базовым ценам',
				},
				'-',
				{
					text:'Рассчитать цены комплекта',
				},
				'-',
				{
					text:'Перечитать текущие цены',
				},
				'-',
				{
					text:'Записать цены',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДокументУстановкаЦен',
			text: 'Документ установки цен:',
			style: 'position:absolute;left:6px;top:6px;width:131px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументУстановкаЦен',
			style: 'position:absolute;left:142px;top:6px;width:450px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подставлять валюту из диапазона',
			style: 'position:absolute;left:6px;top:153px;width:586px;height:20px;',
		},
					]
				},
				{
					title:'Описание',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ПолеДополнительноеОписаниеНоменклатуры',
			style: 'position:absolute;left:6px;top:34px;width:586px;height:141px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроизводитель',
			text: 'Производитель:',
			style: 'position:absolute;left:6px;top:6px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Производитель',
			style: 'position:absolute;left:94px;top:6px;width:194px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вести учет по сериям',
			style: 'position:absolute;left:305px;top:125px;width:127px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидНоменклатуры',
			style: 'position:absolute;left:451px;top:79px;width:157px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидНоменклатуры',
			text: 'Вид номенклатуры:',
			style: 'position:absolute;left:346px;top:79px;width:100px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:131px;height:131px;',
			height: 131,width: 131,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаХраненияОстатков',
			style: 'position:absolute;left:226px;top:125px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаДляОтчетов',
			style: 'position:absolute;left:226px;top:148px;width:73px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаХраненияОстатков',
			text: 'Ед. хран. ост.:',
			style: 'position:absolute;left:139px;top:127px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаДляОтчетов',
			text: 'Ед. для отчетов:',
			style: 'position:absolute;left:139px;top:148px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Весовой товар',
			style: 'position:absolute;left:305px;top:172px;width:92px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вести партионный учет по сериям',
			style: 'position:absolute;left:305px;top:148px;width:191px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмеренияМест',
			text: ' Ед. мест:',
			style: 'position:absolute;left:137px;top:172px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмеренияМест',
			style: 'position:absolute;left:226px;top:172px;width:73px;height:19px;',
		},
	]
});