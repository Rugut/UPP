Ext.define('Обработки.АнализНеявок.ФормаДокументов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:367px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Неявка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:342px;width:400px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:97px;width:384px;height:237px;',
			height: 237,width: 384,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Отпуск',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Начало:',
			style: 'position:absolute;left:6px;top:148px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНачалаДополнительногоОтпуска',
			style: 'position:absolute;left:114px;top:148px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Порядок расчета:',
			style: 'position:absolute;left:6px;top:77px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПорядокРасчетаОсновногоОтпуска',
			style: 'position:absolute;left:114px;top:77px;width:270px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Ежегодный оплачиваемый отпуск',
			style: 'position:absolute;left:0px;top:55px;width:384px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Вид отпуска:',
			style: 'position:absolute;left:6px;top:172px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидРасчетаДополнительногоОтпуска',
			style: 'position:absolute;left:114px;top:172px;width:270px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Процент оплаты:',
			style: 'position:absolute;left:6px;top:196px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентОплаты',
			style: 'position:absolute;left:114px;top:196px;width:80px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Дополнительный (другой) отпуск',
			style: 'position:absolute;left:0px;top:126px;width:384px;height:16px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'РабочийГодС',
			style: 'position:absolute;left:114px;top:101px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРабочийГодС',
			text: 'За период работы с:',
			style: 'position:absolute;left:6px;top:101px;width:106px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'РабочийГодПо',
			style: 'position:absolute;left:217px;top:101px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРабочийГодПо',
			text: 'по:',
			style: 'position:absolute;left:198px;top:101px;width:15px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала1',
			text: 'Дата начала отпуска:',
			style: 'position:absolute;left:0px;top:4px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНачалаСобытияОтпуска',
			style: 'position:absolute;left:114px;top:4px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОплачиваемыйПериод',
			text: 'Оплачиваемый период с ... по ...',
			style: 'position:absolute;left:0px;top:28px;width:384px;height:19px;',
		},
					]
				},
				{
					title:'Больничный',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПричинаНетрудоспособности',
			text: 'Причина:',
			style: 'position:absolute;left:6px;top:68px;width:98px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПричинаНетрудоспособности',
			style: 'position:absolute;left:105px;top:68px;width:279px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПервичныйБольничныйЛист',
			style: 'position:absolute;left:128px;top:20px;width:256px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерВходящего',
			style: 'position:absolute;left:253px;top:44px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СерияВходящего',
			style: 'position:absolute;left:105px;top:44px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВходящийСерия',
			text: 'Входящие серия:',
			style: 'position:absolute;left:6px;top:44px;width:98px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВходящийНомер',
			text: ' номер:',
			style: 'position:absolute;left:202px;top:44px;width:44px;height:19px;text-align:center;',
		},
		{
			xtype: 'fieldset',
			title: 'Временная нетрудоспособность',
			style: 'position:absolute;left:0px;top:0px;width:384px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСлучайУходаЗаБольнымРебенком',
			text: 'Уход за ребенком:',
			style: 'position:absolute;left:6px;top:93px;width:98px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СлучайУходаЗаБольнымРебенком',
			style: 'position:absolute;left:105px;top:93px;width:279px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Продолжение листка',
			style: 'position:absolute;left:0px;top:20px;width:127px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала',
			text: 'Дата начала нетрудоспособности:',
			style: 'position:absolute;left:6px;top:118px;width:175px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНачалаОплаты',
			style: 'position:absolute;left:183px;top:142px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДнейОплаты',
			text: 'Назначить пособие с:',
			style: 'position:absolute;left:6px;top:142px;width:175px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ДнейОплаты',
			style: 'position:absolute;left:296px;top:142px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДней',
			text: 'дней',
			style: 'position:absolute;left:341px;top:143px;width:29px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'за',
			style: 'position:absolute;left:276px;top:142px;width:16px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНачалаСобытия',
			style: 'position:absolute;left:183px;top:118px;width:88px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:165px;width:384px;height:51px;',
			height: 51,width: 384,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница обычный расчет',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПроцентОплаты',
			text: 'Процент оплаты:',
			style: 'position:absolute;left:6px;top:30px;width:98px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентОплатыБольничного',
			style: 'position:absolute;left:105px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Ограничение:',
			style: 'position:absolute;left:189px;top:30px;width:71px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОграничениеПособия',
			style: 'position:absolute;left:261px;top:30px;width:123px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтажЛет',
			text: 'Стаж: лет',
			style: 'position:absolute;left:6px;top:6px;width:53px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтажЛет',
			style: 'position:absolute;left:64px;top:6px;width:32px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтажМесяцев',
			text: 'месяцев',
			style: 'position:absolute;left:105px;top:6px;width:47px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтажМесяцев',
			style: 'position:absolute;left:153px;top:6px;width:32px;height:19px;',
		},
					]
				},
				{
					title:'Страница особый расчет',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПроцентОплаты3',
			text: 'Процент оплаты:',
			style: 'position:absolute;left:6px;top:30px;width:98px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентОплатыБольничного1',
			style: 'position:absolute;left:105px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Ограничение:',
			style: 'position:absolute;left:189px;top:30px;width:71px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОграничениеПособия1',
			style: 'position:absolute;left:261px;top:30px;width:123px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтажЛет1',
			text: 'Стаж: лет',
			style: 'position:absolute;left:6px;top:6px;width:53px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтажЛет1',
			style: 'position:absolute;left:61px;top:6px;width:32px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтажМесяцев1',
			text: 'месяцев',
			style: 'position:absolute;left:105px;top:6px;width:47px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтажМесяцев1',
			style: 'position:absolute;left:153px;top:6px;width:32px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Средний',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Оплата по среднему заработку',
			style: 'position:absolute;left:0px;top:0px;width:384px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентОплаты1',
			text: 'Процент оплаты:',
			style: 'position:absolute;left:6px;top:45px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентОплатыПоСреднему',
			style: 'position:absolute;left:94px;top:45px;width:74px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРасчета1',
			text: 'Вид оплаты:',
			style: 'position:absolute;left:6px;top:22px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидРасчета',
			style: 'position:absolute;left:94px;top:22px;width:290px;height:19px;',
		},
					]
				},
				{
					title:'Простой',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидРасчета',
			text: 'Вид простоя:',
			style: 'position:absolute;left:6px;top:22px;width:69px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидПростоя',
			style: 'position:absolute;left:76px;top:22px;width:308px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Простой',
			style: 'position:absolute;left:0px;top:0px;width:384px;height:16px;',
		},
					]
				},
				{
					title:'Невыход',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидНевыхода',
			text: 'Вид невыхода:',
			style: 'position:absolute;left:6px;top:22px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидНевыхода',
			style: 'position:absolute;left:84px;top:22px;width:300px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Неоплачиваемый невыход',
			style: 'position:absolute;left:0px;top:0px;width:384px;height:16px;',
		},
					]
				},
				{
					title:'Учебный отпуск',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Оплата учебного отпуска',
			style: 'position:absolute;left:0px;top:0px;width:384px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентОплаты2',
			text: 'Процент оплаты:',
			style: 'position:absolute;left:6px;top:45px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентОплатыУчебногоОтпуска',
			style: 'position:absolute;left:94px;top:45px;width:74px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРасчета2',
			text: 'Вид расчета:',
			style: 'position:absolute;left:6px;top:22px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидРасчетаУчебногоОтпуска',
			style: 'position:absolute;left:94px;top:22px;width:290px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Документы',
			style: 'position:absolute;left:8px;top:31px;width:384px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКадровый',
			text: 'Кадровый:',
			style: 'position:absolute;left:14px;top:50px;width:61px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКадровыйДокумент',
			style: 'position:absolute;left:76px;top:50px;width:316px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасчетный',
			text: 'Расчетный:',
			style: 'position:absolute;left:14px;top:72px;width:61px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаРасчетныйДокумент',
			style: 'position:absolute;left:76px;top:72px;width:316px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаботник',
			text: 'Сотрудник:',
			style: 'position:absolute;left:8px;top:8px;width:67px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Сотрудник',
			style: 'position:absolute;left:76px;top:8px;width:316px;height:19px;',
		},
	],
	dockedItems:
	[
	]
});