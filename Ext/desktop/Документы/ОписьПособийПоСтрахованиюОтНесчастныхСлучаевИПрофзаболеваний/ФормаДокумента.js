Ext.define('Документы.ОписьПособийПоСтрахованиюОтНесчастныхСлучаевИПрофзаболеваний.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:707px;height:499px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Опись пособий по страхованию от несчастных случаев и профзаболеваний',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:366px;top:33px;width:47px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:413px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:497px;top:33px;width:18px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:520px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:57px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:447px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:447px;width:603px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:707px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие',
				},
				{
					text:'Открыть свойства',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Открыть категории',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие3',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Редактировать код номер',
				},
				'-',
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:474px;width:707px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				'-',
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:691px;height:357px;',
			height: 357,width: 691,
			items:
			[
				{
					title:'Пособия',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:677px;height:24px;',
			items:
			[
				{
					text:'Заполнить по листкам нетрудоспособности',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие5',
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
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:340px;height:296px;',
			height: 296,width: 340,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'120',
				},
				{
					text:'Листок нетрудоспособности',
					width:'160',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьФамилия',
			text: 'Фамилия:',
			style: 'position:absolute;left:359px;top:36px;width:55px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:421px;top:36px;width:253px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмя',
			text: 'Имя:',
			style: 'position:absolute;left:359px;top:60px;width:27px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:421px;top:60px;width:253px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчество',
			text: 'Отчество:',
			style: 'position:absolute;left:359px;top:84px;width:51px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:421px;top:84px;width:253px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерВходящего',
			style: 'position:absolute;left:547px;top:138px;width:127px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВходящийНомер',
			text: 'Номер листка нетрудоспособности:',
			style: 'position:absolute;left:359px;top:138px;width:186px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьДанныеЗЛ',
			text: 'Обновить',
			style: 'position:absolute;left:359px;top:308px;width:82px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументыОснования',
			text: 'Наименование и реквизиты представленных документов:',
			style: 'position:absolute;left:358px;top:184px;width:316px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ДокументыОснования',
			style: 'position:absolute;left:358px;top:205px;width:316px;height:61px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоСтраниц',
			text: 'Количество страниц всего:',
			style: 'position:absolute;left:359px;top:272px;width:162px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоСтраниц',
			style: 'position:absolute;left:547px;top:272px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Прочее',
			text: 'Документы',
			style: 'position:absolute;left:359px;top:115px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаАктаФормыН1',
			text: 'Дата акта формы Н-1:',
			style: 'position:absolute;left:359px;top:161px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаАктаФормыН1',
			style: 'position:absolute;left:547px;top:161px;width:88px;height:19px;',
		},
					]
				},
				{
					title:'Данные страхователя',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:14px;top:162px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель',
			style: 'position:absolute;left:121px;top:162px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя',
			text: 'Должность:',
			style: 'position:absolute;left:358px;top:162px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя',
			style: 'position:absolute;left:439px;top:162px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРегистрационныйНомерФСС',
			text: 'Регистрационный номер:',
			style: 'position:absolute;left:14px;top:108px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегистрационныйНомерФСС',
			style: 'position:absolute;left:149px;top:108px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныйКодФСС',
			text: 'Дополнительный код:',
			style: 'position:absolute;left:264px;top:108px;width:116px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнительныйКодФСС',
			style: 'position:absolute;left:382px;top:108px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПодчиненностиФСС',
			text: 'Код подчиненности:',
			style: 'position:absolute;left:497px;top:108px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПодчиненностиФСС',
			style: 'position:absolute;left:602px;top:108px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеТерриториальногоОрганаФСС',
			text: 'Наименование территориального органа ФСС:',
			style: 'position:absolute;left:14px;top:84px;width:241px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеТерриториальногоОрганаФСС',
			style: 'position:absolute;left:258px;top:84px;width:404px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'Регистрация в ФСС',
			style: 'position:absolute;left:6px;top:60px;width:129px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Подписи',
			style: 'position:absolute;left:6px;top:138px;width:129px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьДанныеСтрахователя',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:310px;width:82px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'Надпись47',
			text: 'Основные',
			style: 'position:absolute;left:6px;top:6px;width:129px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН1',
			text: 'ИНН:',
			style: 'position:absolute;left:14px;top:30px;width:31px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН1',
			style: 'position:absolute;left:58px;top:30px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКПП',
			text: 'КПП:',
			style: 'position:absolute;left:197px;top:30px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПП',
			style: 'position:absolute;left:235px;top:30px;width:120px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон',
			text: 'Контактный телефон:',
			style: 'position:absolute;left:366px;top:57px;width:149px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон',
			style: 'position:absolute;left:520px;top:57px;width:120px;height:19px;',
		},
	]
});