Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаМастера',
	{
	extend: 'Ext.window.Window',
	height: 485,width: 668,
	iconCls: 'bogus',
	title: 'Мастер заполнения заявления на подключение',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:668px;height:460px;',
			height: 460,width: 668,
			items:
			[
				{
					title:'Старт',
					items:
					[
					]
				},
				{
					title:'НомерОсновнойПоставки',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерОсновнойПоставки1с',
			style: 'position:absolute;left:160px;top:164px;width:164px;height:19px;',
		},
					]
				},
				{
					title:'ВыборУЦ',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпецоператорИУЦ',
			style: 'position:absolute;left:148px;top:140px;width:508px;height:19px;',
		},
					]
				},
				{
					title:'ВыборКриптопровайдера',
					items:
					[
					]
				},
				{
					title:'СоглашениеОПрисоединенииКРегламентуУЦ',
					items:
					[
		{
			xtype: 'button',
			name: 'ВывестиСоглашениеНапечать',
			text: 'Печать',
			style: 'position:absolute;left:588px;top:431px;width:72px;height:20px;',
		},
					]
				},
				{
					title:'Реквизиты',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:140px;top:116px;width:384px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:140px;top:204px;width:520px;height:38px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КраткоеНаименование',
			style: 'position:absolute;left:140px;top:180px;width:520px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:140px;top:248px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПП',
			style: 'position:absolute;left:140px;top:276px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегистрационныйНомерПФР',
			style: 'position:absolute;left:548px;top:248px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегистрационныйНомерФСС',
			style: 'position:absolute;left:548px;top:276px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЮрАдрес',
			style: 'position:absolute;left:140px;top:364px;width:520px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФактАдрес',
			style: 'position:absolute;left:140px;top:388px;width:520px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЭлектАдрес',
			style: 'position:absolute;left:140px;top:436px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон',
			style: 'position:absolute;left:140px;top:412px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТелефонМобильный',
			style: 'position:absolute;left:504px;top:412px;width:156px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьСведенияОбОрганизации',
			text: 'Обновить сведения',
			style: 'position:absolute;left:532px;top:116px;width:128px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнительныйКодФСС',
			style: 'position:absolute;left:548px;top:300px;width:110px;height:19px;',
		},
					]
				},
				{
					title:'ВладельцыЭЦП',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:264px;top:160px;width:396px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументВидСотрудника',
			style: 'position:absolute;left:116px;top:327px;width:544px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументСерияСотрудника',
			style: 'position:absolute;left:116px;top:353px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументНомерСотрудника',
			style: 'position:absolute;left:304px;top:353px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументДатаВыдачиСотрудника',
			style: 'position:absolute;left:520px;top:353px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументКемВыданСотрудника',
			style: 'position:absolute;left:116px;top:379px;width:544px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеСотрудника',
			style: 'position:absolute;left:444px;top:269px;width:216px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьСотрудника',
			style: 'position:absolute;left:116px;top:269px;width:188px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:116px;top:211px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:300px;top:211px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:476px;top:211px;width:100px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВызоваДанныхФИО',
			text: 'Подробнее...',
			style: 'position:absolute;left:584px;top:211px;width:76px;height:19px;',
		},
					]
				},
				{
					title:'Направления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:140px;width:652px;height:312px;',
			height: 312,width: 652,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ТипПолучателя',
				},
				{
					text:'КодПолучателя',
				},
				{
					text:'КПП',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:115px;width:652px;height:24px;',
			items:
			[
				{
					text:'ДобавитьНаправление',
				},
				{
					text:'Редактирование',
				},
				{
					text:'Востановить',
				},
				{
					text:'УдалитьНаправление',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Скопировать',
				},
			]
		},
					]
				},
				{
					title:'Подтверждение',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:460px;width:668px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Назад',
				},
				{
					text:'Отмена',
				},
				{
					text:'Далее',
				},
			]
		},
	]
});