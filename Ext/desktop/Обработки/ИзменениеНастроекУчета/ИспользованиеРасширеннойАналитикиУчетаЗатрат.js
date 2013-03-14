Ext.define('Обработки.ИзменениеНастроекУчета.ИспользованиеРасширеннойАналитикиУчетаЗатрат',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:498px;height:442px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка параметра учета ""Использовать расширенную аналитику учета затрат""',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:417px;width:498px;height:25px;',
			items:
			[
				{
					text:'Изменить настройку',
				},
				{
					text:'Назад',
				},
				{
					text:'Далее',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:1px;width:498px;height:416px;',
			height: 416,width: 498,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Выбор режима',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПояснениеВыборРежима',
			text: 'Выберите вариант заполнения регистров, необходимых для использования расширенной аналитики учета затрат.
После этого нажмите кнопку "Далее".',
			style: 'position:absolute;left:6px;top:7px;width:487px;height:43px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Полный',
			style: 'position:absolute;left:6px;top:70px;width:117px;height:34px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Выборочный',
			style: 'position:absolute;left:6px;top:118px;width:117px;height:34px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолныйВыборРежима',
			text: 'Заполнение регистров расширенной аналитики и включение признака  использования расширенной аналитики произойдет за один этап. Может занять длительное время.',
			style: 'position:absolute;left:129px;top:70px;width:364px;height:43px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыборочныйВыборРежима',
			text: 'Процесс заполнения можно разбить на несколько этапов. Возможен выбор, по каким данным выполнять заполнение регистров расширенной аналитики. ',
			style: 'position:absolute;left:129px;top:118px;width:364px;height:44px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВниманиеВыборРежима',
			text: 'Внимание! При включении режима будут сформированы только входящие остатки по регистрам расширенной аналитики на дату начала использования.
Для формирования движений потребуется перепроведение документов информационной базы после установки параметра учета.',
			style: 'position:absolute;left:47px;top:197px;width:446px;height:69px;',
		},
					]
				},
				{
					title:'Изменить настройку выборочная',
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
					text:'Раздел учета',
					width:'260',
				},
				{
					text:'Упр. учет',
					width:'78',
				},
				{
					text:'Бух. учет',
					width:'72',
				},
				{
					text:'Налог. учет',
					width:'68',
				},
				{
					text:'Раздел учета имя',
					width:'28',
				},
				{
					text:'Рассчитан УУ',
					width:'30',
				},
				{
					text:'Рассчитан БУ',
					width:'26',
				},
				{
					text:'Рассчитан НУ',
					width:'29',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:93px;width:370px;height:24px;',
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Рассчитать',
				},
				'-',
				{
					text:'Обновить статусы',
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
					text:'',
					width:'53',
				},
				{
					text:'Ввод остатков по регистру',
					width:'150',
				},
				{
					text:'На основании данных регистра',
					width:'180',
				},
				{
					text:'Ссылка',
					width:'28',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:266px;width:486px;height:24px;',
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Отбор по разделу учета',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИспользоватьРасширеннуюАналитикуВыборочныйРежим',
			text: 'Использовать расширенную аналитику учета затрат с:',
			style: 'position:absolute;left:6px;top:6px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Изменить настройку полная',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать расширенную аналитику учета затрат с:',
			style: 'position:absolute;left:6px;top:30px;width:354px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеПериодаРегистрацииПолныйРежим',
			style: 'position:absolute;left:355px;top:30px;width:137px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолныйРежимИнформация',
			text: 'Измените значение режима использования расширенной аналитики.',
			style: 'position:absolute;left:6px;top:6px;width:488px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:53px;width:488px;height:89px;',
			height: 89,width: 488,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Отключение режима',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПриОтключенииНастройки',
			text: 'Внимание! При отключении использования расширенной аналитики учета затрат необходимо перепровести документы, которые проводились в период использования режима расширенной аналитики.',
			style: 'position:absolute;left:47px;top:6px;width:433px;height:68px;',
		},
					]
				},
				{
					title:'Расчет не окончен',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРасчетНеОкончен',
			text: 'Внимание! Расчет выполнен не для всех исходных данных.
Остатки в регистрах расширенной аналитики сформированы не полностью. 
Использование режима расширенной аналитики может привести к некорректным результатам.
Чтобы вернуться к расчету, используйте кнопку "Назад"',
			style: 'position:absolute;left:47px;top:8px;width:433px;height:68px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Режим использования расширенной аналитики',
					items:
					[
		{
			xtype: 'radio',
			boxLabel: 'Регламентированный учет',
			style: 'position:absolute;left:24px;top:26px;width:468px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Регламентированный учет с дополнительной аналитикой',
			style: 'position:absolute;left:24px;top:89px;width:468px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Управленческий и регламентированный учет',
			style: 'position:absolute;left:24px;top:150px;width:468px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись27',
			text: 'Управленческий и регламентированный учеты совпадают, детализация учета затрат соответствует аналитике проводок бухгалтерского учета.',
			style: 'position:absolute;left:32px;top:45px;width:460px;height:28px;',
		},
		{
			xtype: 'label',
			name: 'Надпись28',
			text: 'Управленческий и регламентированный учеты совпадают, детализация учета затрат - выше аналитики проводок бухгалтерского учета.',
			style: 'position:absolute;left:32px;top:108px;width:460px;height:28px;',
		},
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Управленческий и регламентированный учеты различаются: есть документы, которые отражаются только в одном из учетов. Детализация учета затрат - любая.',
			style: 'position:absolute;left:32px;top:170px;width:460px;height:28px;',
		},
					]
				},
				{
					title:'Настройка аналитики учета затрат',
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
					width:'363',
				},
				{
					text:'Упр',
					width:'44',
				},
				{
					text:'Регл',
					width:'44',
				},
			]
		},
					]
				},
			]
		},
	]
});