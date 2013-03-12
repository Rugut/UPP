Ext.define('Документы.НДФЛиЕСНДоходыИНалоги.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:813px;height:495px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Корректировка учета по НДФЛ, страховым взносам и ЕСН',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:424px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от',
			style: 'position:absolute;left:504px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:524px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:443px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:169px;top:443px;width:636px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:813px;height:25px;',
			items:
			[
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Редактировать номер',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:470px;width:813px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				{
					text:'OK',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:797px;height:351px;',
			height: 351,width: 797,
			items:
			[
				{
					title:'НДФЛ: доходы и налоги',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:43px;width:622px;height:300px;',
			height: 300,width: 622,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'95',
				},
				{
					text:'Дата дохода',
					width:'75',
				},
				{
					text:'Месяц налогового периода',
					width:'100',
				},
				{
					text:'Период регистрации',
					width:'100',
				},
				{
					text:'Код дохода',
					width:'100',
				},
				{
					text:'Сумма дохода',
					width:'100',
				},
				{
					text:'Код вычета',
					width:'100',
				},
				{
					text:'Количество детей',
					width:'100',
				},
				{
					text:'Сумма вычета',
					width:'100',
				},
				{
					text:'Сумма налога исчисленная',
					width:'100',
				},
				{
					text:'Для обособленного подразделения',
					width:'200',
				},
				{
					text:'Код по ОКАТО',
					width:'100',
				},
				{
					text:'КПП',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:18px;width:622px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Подбор',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие6',
				},
			]
		},
					]
				},
				{
					title:'НДФЛ по ставке 13%',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:18px;width:622px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:42px;width:622px;height:117px;',
			height: 117,width: 622,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'182',
				},
				{
					text:'Месяц налогового периода',
					width:'147',
				},
				{
					text:'Период регистрации',
					width:'147',
				},
				{
					text:'Налог',
					width:'100',
				},
				{
					text:'Для обособленного подразделения',
					width:'200',
				},
				{
					text:'Код по ОКАТО',
					width:'100',
				},
				{
					text:'КПП',
					width:'100',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:206px;width:622px;height:137px;',
			height: 137,width: 622,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'182',
				},
				{
					text:'Месяц налогового периода',
					width:'147',
				},
				{
					text:'Период регистрации',
					width:'147',
				},
				{
					text:'Код вычета',
					width:'65',
				},
				{
					text:'Предоставленный вычет',
					width:'106',
				},
				{
					text:'Для обособленного подразделения',
					width:'200',
				},
				{
					text:'Код по ОКАТО',
					width:'100',
				},
				{
					text:'КПП',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:182px;width:622px;height:24px;',
			items:
			[
				{
					text:'Действие14',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие9',
				},
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Действие17',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие15',
				},
			]
		},
					]
				},
				{
					title:'НДФЛ удержанный',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:18px;width:622px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'суммами исчисленного налога',
				},
				'-',
				{
					text:'Подбор',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие8',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:42px;width:622px;height:301px;',
			height: 301,width: 622,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'96',
				},
				{
					text:'Месяц налогового периода',
					width:'100',
				},
				{
					text:'Период регистрации',
					width:'100',
				},
				{
					text:'Ставка налога',
					width:'100',
				},
				{
					text:'Код дохода',
					width:'100',
				},
				{
					text:'Сумма',
					width:'100',
				},
				{
					text:'Для обособленного подразделения',
					width:'200',
				},
				{
					text:'Код по ОКАТО',
					width:'100',
				},
				{
					text:'КПП',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Страховые взносы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:42px;width:622px;height:117px;',
			height: 117,width: 622,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'100',
				},
				{
					text:'Месяц',
					width:'100',
				},
				{
					text:'Вид дохода',
					width:'100',
				},
				{
					text:'Сумма дохода',
					width:'100',
				},
				{
					text:'Скидка',
					width:'100',
				},
				{
					text:'ЕНВД',
					width:'39',
				},
				{
					text:'Облагается по дополнительному тарифу',
					width:'215',
				},
				{
					text:'Облагается взносами на доплату к пенсии шахтерам',
					width:'237',
				},
				{
					text:'Доход фармацевта в аптеке',
					width:'100',
				},
				{
					text:'Доход члена экипажа судна под флагом РФ',
					width:'100',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:206px;width:622px;height:137px;',
			height: 137,width: 622,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'100',
				},
				{
					text:'Месяц',
					width:'100',
				},
				{
					text:'Взносы в ПФР',
					width:'400',
				},
				{
					text:'страховая',
					width:'80',
				},
				{
					text:'накопительная',
					width:'80',
				},
				{
					text:'страховая по ЕНВД',
					width:'80',
				},
				{
					text:'накопительная по ЕНВД',
					width:'80',
				},
				{
					text:'по доп. тарифу',
					width:'80',
				},
				{
					text:'на доплату к пенсии шахтерам',
					width:'100',
				},
				{
					text:'Взносы в ФСС',
					width:'160',
				},
				{
					text:'соц.страхование',
					width:'80',
				},
				{
					text:'несчастные случаи',
					width:'80',
				},
				{
					text:'соц.страхование  по ЕНВД',
					width:'80',
				},
				{
					text:'Взносы в ФОМС',
					width:'160',
				},
				{
					text:'федеральный',
					width:'80',
				},
				{
					text:'территориальный',
					width:'80',
				},
				{
					text:'федеральный по ЕНВД',
					width:'80',
				},
				{
					text:'территориальный по ЕНВД',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:18px;width:622px;height:24px;',
			items:
			[
				{
					text:'Подбор',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'по данным для исчисления НДФЛ',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:182px;width:622px;height:24px;',
			items:
			[
				{
					text:'Подбор',
				},
				'-',
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
			]
		},
					]
				},
				{
					title:'ЕСН: доходы и налоги',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:42px;width:622px;height:117px;',
			height: 117,width: 622,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'100',
				},
				{
					text:'Месяц налогового периода',
					width:'100',
				},
				{
					text:'Код дохода',
					width:'89',
				},
				{
					text:'Сумма дохода',
					width:'101',
				},
				{
					text:'Скидка',
					width:'91',
				},
				{
					text:'Облагается ЕНВД',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:18px;width:622px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:206px;width:622px;height:137px;',
			height: 137,width: 622,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'100',
				},
				{
					text:'Месяц налогового периода',
					width:'100',
				},
				{
					text:'Федеральный бюджет',
					width:'69',
				},
				{
					text:'ФСС',
					width:'71',
				},
				{
					text:'ФФОМС',
					width:'83',
				},
				{
					text:'ТФОМС',
					width:'83',
				},
				{
					text:'ПФР Страховая',
					width:'81',
				},
				{
					text:'ПФР Накопительная',
					width:'81',
				},
				{
					text:'Примененная льгота ФБ',
					width:'100',
				},
				{
					text:'Примененная льгота ФСС',
					width:'100',
				},
				{
					text:'Примененная льгота ФОМС',
					width:'100',
				},
				{
					text:'ПФР Накопительная ЕНВД',
					width:'100',
				},
				{
					text:'ПФР Страховая ЕНВД',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:182px;width:622px;height:24px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
			]
		},
					]
				},
				{
					title:'Страховое обеспечение',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:42px;width:622px;height:117px;',
			height: 117,width: 622,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Дата начисления',
					width:'100',
				},
				{
					text:'Сотрудник',
					width:'100',
				},
				{
					text:'Вид пособия',
					width:'100',
				},
				{
					text:'Новый случай',
					width:'76',
				},
				{
					text:'Дата случая',
					width:'73',
				},
				{
					text:'Оплачено дней',
					width:'85',
				},
				{
					text:'Сумма всего',
					width:'80',
				},
				{
					text:'В т.ч. сумма сверх норм',
					width:'80',
				},
				{
					text:'Расшифровка выплат за счет федерального бюджета',
					width:'100',
				},
				{
					text:'Облагается ЕНВД',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:18px;width:622px;height:24px;',
			items:
			[
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:182px;width:622px;height:24px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:206px;width:622px;height:137px;',
			height: 137,width: 622,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Дата начисления',
					width:'100',
				},
				{
					text:'Сотрудник',
					width:'100',
				},
				{
					text:'Дата начала',
					width:'100',
				},
				{
					text:'Дата окончания',
					width:'100',
				},
				{
					text:'По уходу за первым ребенком',
					width:'100',
				},
				{
					text:'В т.ч. сумма сверх норм (по уходу за первым ребенком)',
					width:'100',
				},
				{
					text:'По уходу за вторым (и последующим) ребенком',
					width:'100',
				},
				{
					text:'В т.ч. сумма сверх норм (по уходу за вторым ребенком)',
					width:'100',
				},
				{
					text:'Расшифровка выплат за счет федерального бюджета',
					width:'100',
				},
				{
					text:'Средний дневной заработок',
					width:'100',
				},
				{
					text:'Облагается ЕНВД',
					width:'100',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:57px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Налоговый (расчетный) период:',
			style: 'position:absolute;left:8px;top:57px;width:168px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:182px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГод',
			text: 'год',
			style: 'position:absolute;left:270px;top:57px;width:25px;height:19px;',
		},
	]
});