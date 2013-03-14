Ext.define('Документы.РасчетПоМоделиБюджетирования.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:751px;height:470px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Расчет по модели бюджетирования',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРасчета',
			style: 'position:absolute;left:121px;top:59px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Сценарий:',
			style: 'position:absolute;left:8px;top:84px;width:113px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:121px;top:84px;width:236px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Регламентный расчет',
			style: 'position:absolute;left:223px;top:59px;width:134px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:751px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				{
					text:'Выполнить расчет',
				},
				{
					text:'Просмотр операций',
				},
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:445px;width:751px;height:25px;',
			items:
			[
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
			name: 'Надпись1',
			text: 'Дата расчета:',
			style: 'position:absolute;left:8px;top:59px;width:113px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:199px;width:735px;height:219px;',
			height: 219,width: 735,
			items:
			[
				{
					title:'Параметры расчета (по строке таблицы)',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяОборотов',
			style: 'position:absolute;left:182px;top:30px;width:208px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Статья оборотов:',
			style: 'position:absolute;left:6px;top:30px;width:176px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеИзмененияПоПериодам',
			style: 'position:absolute;left:182px;top:54px;width:208px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Изменение по периодам:',
			style: 'position:absolute;left:6px;top:54px;width:176px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФормулаКоличество',
			style: 'position:absolute;left:514px;top:30px;width:212px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Расчет количества:',
			style: 'position:absolute;left:410px;top:30px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФормулаСумма',
			style: 'position:absolute;left:514px;top:54px;width:212px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Расчет суммы:',
			style: 'position:absolute;left:410px;top:54px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидИзмененияПоЦФО',
			style: 'position:absolute;left:182px;top:102px;width:208px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись16',
			text: 'Вид изменения по ЦФО:',
			style: 'position:absolute;left:6px;top:102px;width:176px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеИзмененияПоЦФО',
			style: 'position:absolute;left:514px;top:102px;width:212px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Значение:',
			style: 'position:absolute;left:410px;top:102px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидИзмененияПоПроектам',
			style: 'position:absolute;left:182px;top:126px;width:208px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Вид изменения по проектам:',
			style: 'position:absolute;left:6px;top:126px;width:176px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеИзмененияПоПроектам',
			style: 'position:absolute;left:514px;top:126px;width:212px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Значение:',
			style: 'position:absolute;left:410px;top:126px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидИзмененияПоКонтрагентам',
			style: 'position:absolute;left:182px;top:150px;width:208px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Вид изменения по контрагентам:',
			style: 'position:absolute;left:6px;top:150px;width:176px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеИзмененияПоКонтрагентам',
			style: 'position:absolute;left:514px;top:150px;width:212px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Значение:',
			style: 'position:absolute;left:410px;top:150px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидИзмененияПоНоменклатуре',
			style: 'position:absolute;left:182px;top:174px;width:208px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Вид изменения по номенклатуре:',
			style: 'position:absolute;left:6px;top:174px;width:176px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеИзмененияПоНоменклатуре',
			style: 'position:absolute;left:514px;top:174px;width:212px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'Значение:',
			style: 'position:absolute;left:410px;top:174px;width:102px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:175px;height:25px;',
			items:
			[
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
				{
					text:'Предыдущая строка',
				},
				{
					text:'Следующая строка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'ТекстНомерСтрокиОбороты',
			text: 'Строка 1 из 5',
			style: 'position:absolute;left:546px;top:0px;width:180px;height:24px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Выбор валюты операции:',
			style: 'position:absolute;left:6px;top:78px;width:176px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидИзмененияПоВалюте',
			style: 'position:absolute;left:182px;top:78px;width:208px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись25',
			text: 'Значение:',
			style: 'position:absolute;left:410px;top:78px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеИзмененияПоВалюте',
			style: 'position:absolute;left:514px;top:78px;width:212px;height:19px;',
		},
					]
				},
				{
					title:'Параметры расчета (таблица)',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:720px;height:169px;',
			height: 169,width: 720,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Статья оборотов',
					width:'100',
				},
				{
					text:'Формула для суммы',
					width:'100',
				},
				{
					text:'Формула количество',
					width:'100',
				},
				{
					text:'Вид изменения по валюте',
					width:'100',
				},
				{
					text:'Значение изменения по валюте',
					width:'100',
				},
				{
					text:'Значение изменения по периодам',
					width:'100',
				},
				{
					text:'Вид изменения по ЦФО',
					width:'100',
				},
				{
					text:'Значение изменения по ЦФО',
					width:'100',
				},
				{
					text:'Вид изменения по проектам',
					width:'100',
				},
				{
					text:'Значение изменения по проектам',
					width:'100',
				},
				{
					text:'Вид изменения по контрагентам',
					width:'100',
				},
				{
					text:'Значение изменения по контрагентам',
					width:'100',
				},
				{
					text:'Вид изменения по номенклатуре',
					width:'100',
				},
				{
					text:'Значение изменения по номенклатуре',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:720px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Комментарий',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:6px;top:6px;width:720px;height:187px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись26',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:419px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:191px;top:419px;width:209px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись27',
			text: 'Состояние:',
			style: 'position:absolute;left:422px;top:419px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:526px;top:419px;width:217px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись28',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:109px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:121px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:221px;top:33px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от',
			style: 'position:absolute;left:203px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:366px;top:33px;width:377px;height:159px;',
			height: 159,width: 377,
			items:
			[
				{
					title:'Показатели для расчета',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:363px;height:102px;',
			height: 102,width: 363,
			columns:
			[
				{
					text:'Представление',
					width:'178',
				},
				{
					text:'Источник данных',
					width:'289',
				},
				{
					text:'Код',
					width:'82',
				},
				{
					text:'Значение',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:363px;height:25px;',
			items:
			[
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
			]
		},
					]
				},
				{
					title:'Дополнительные источники данных',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:363px;height:102px;',
			height: 102,width: 363,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Источник данных',
					width:'333',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:363px;height:25px;',
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
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойИсточникДанных',
			style: 'position:absolute;left:121px;top:108px;width:236px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Основной источник данных:',
			style: 'position:absolute;left:8px;top:108px;width:113px;height:28px;',
		},
	]
});