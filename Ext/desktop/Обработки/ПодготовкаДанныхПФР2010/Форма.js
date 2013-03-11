Ext.define('Обработки.ПодготовкаДанныхПФР2010.Форма',
	{
	extend: 'Ext.window.Window',
	height: 616,width: 1000,
	iconCls: 'bogus',
	title: 'Подготовка данных для передачи в ПФР',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:278px;top:8px;width:100px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:45px;width:984px;height:563px;',
			height: 563,width: 984,
			items:
			[
				{
					title:'КвартальнаяОтчетность',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:21px;width:248px;height:24px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'ПометитьНаУдаление',
				},
				{
					text:'Перенести',
				},
				{
					text:'Действие',
				},
				{
					text:'ПринятыеВПФРКомплекты',
				},
				{
					text:'ДействиеОбновить',
				},
				{
					text:'АДВ11',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:46px;width:248px;height:96px;',
			height: 96,width: 248,
			columns:
			[
				{
					text:'Пачка',
				},
				{
					text:'ОтчетныйПериод',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:168px;width:984px;height:137px;',
			height: 137,width: 984,
			items:
			[
				{
					title:'СЗВ6',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:343px;height:137px;',
			height: 137,width: 343,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:26px;width:333px;height:111px;',
			height: 111,width: 333,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ДокументПачка',
				},
				{
					text:'КолонкаСтраховая',
				},
				{
					text:'НачисленоСтраховая',
				},
				{
					text:'УплаченоСтраховая',
				},
				{
					text:'КолонкаНакопительная',
				},
				{
					text:'НачисленоНакопительная',
				},
				{
					text:'УплаченоНакопительная',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:333px;height:25px;',
			items:
			[
				{
					text:'Добавить',
				},
				{
					text:'Удалить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Перенести',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:344px;top:0px;width:640px;height:137px;',
			height: 137,width: 640,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСоставления1',
			style: 'position:absolute;left:216px;top:46px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КатегорияЗастрахованныхЛиц',
			style: 'position:absolute;left:216px;top:94px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель1',
			style: 'position:absolute;left:412px;top:94px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель1',
			style: 'position:absolute;left:412px;top:46px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя1',
			style: 'position:absolute;left:412px;top:70px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПачки1',
			style: 'position:absolute;left:216px;top:70px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КорректируемыйПериод',
			style: 'position:absolute;left:477px;top:2px;width:163px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Проверить2',
			text: 'Проверить пачку',
			style: 'position:absolute;left:510px;top:116px;width:130px;height:21px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:25px;width:121px;height:112px;',
			height: 112,width: 121,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'button',
			name: 'РаспределитьВзносы',
			text: 'Перераспределить взносы в пачке',
			style: 'position:absolute;left:0px;top:19px;width:117px;height:36px;',
		},
		{
			xtype: 'button',
			name: 'РаспределитьВзносыСКомментарием',
			text: 'Перераспределить с комментарием',
			style: 'position:absolute;left:0px;top:67px;width:117px;height:36px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:216px;top:118px;width:289px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'АДВ11',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:20px;width:984px;height:116px;',
			height: 116,width: 984,
			items:
			[
				{
					title:'ТаблицаВзносов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:25px;width:984px;height:91px;',
			height: 91,width: 984,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ТипСтроки',
				},
				{
					text:'Год',
				},
				{
					text:'СтраховаяЧасть',
				},
				{
					text:'НакопительнаяЧасть1',
				},
				{
					text:'ДополнительныйТариф',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:984px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ЗадолженностьПередПФР',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'ДобавитьСтроку',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
			]
		},
					]
				},
				{
					title:'ПустаяСтраница',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'ПустаяСтраница',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:333px;width:984px;height:207px;',
			height: 207,width: 984,
			items:
			[
				{
					title:'СЗВ6',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:333px;height:182px;',
			height: 182,width: 333,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ФизЛицо',
				},
				{
					text:'АдресДляИнформирования',
				},
				{
					text:'НачисленоСтраховая',
				},
				{
					text:'УплаченоСтраховая',
				},
				{
					text:'НачисленоНакопительная',
				},
				{
					text:'УплаченоНакопительная',
				},
				{
					text:'ДоначисленоСтраховая',
				},
				{
					text:'ДоначисленоНакопительная',
				},
				{
					text:'СтраховойНомерПФР',
				},
				{
					text:'Фамилия',
				},
				{
					text:'Имя',
				},
				{
					text:'Отчество',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:333px;height:24px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Очистить',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Адреса',
				},
				{
					text:'ЗаполнитьВсе',
				},
				{
					text:'ТолькоИзменившиеся',
				},
				{
					text:'Действие4',
				},
				{
					text:'Перенести',
				},
				{
					text:'ПрокомментироватьРаспределениеВзносов',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:347px;top:93px;width:637px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие12',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие16',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие13',
				},
				{
					text:'Перезаполнить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:347px;top:118px;width:637px;height:88px;',
			height: 88,width: 637,
			columns:
			[
				{
					text:'НевидимаяКолонка1',
				},
				{
					text:'ДатаНачалаПериода',
				},
				{
					text:'ДатаОкончанияПериода',
				},
				{
					text:'НевидимаяКолонка2',
				},
				{
					text:'ТерриториальныеУсловия',
				},
				{
					text:'ПараметрТерриториальныхУсловий',
				},
				{
					text:'НевидимаяКолонка3',
				},
				{
					text:'ОсобыеУсловияТруда',
				},
				{
					text:'КодПозицииСписка',
				},
				{
					text:'НевидимаяКолонка4',
				},
				{
					text:'ОснованиеИсчисляемогоСтажа',
				},
				{
					text:'ТретийПараметрИсчисляемогоСтажа',
				},
				{
					text:'НевидимаяКолонка5',
				},
				{
					text:'ПервыйПараметрИсчисляемогоСтажа',
				},
				{
					text:'ВторойПараметрИсчисляемогоСтажа',
				},
				{
					text:'НевидимаяКолонка6',
				},
				{
					text:'ОснованиеВыслугиЛет',
				},
				{
					text:'ПервыйПараметрВыслугиЛет',
				},
				{
					text:'ВторойПараметрВыслугиЛет',
				},
				{
					text:'ТретийПараметрВыслугиЛет',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресДляИнформирования',
			style: 'position:absolute;left:689px;top:0px;width:295px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:347px;top:27px;width:637px;height:50px;',
			height: 50,width: 637,
			items:
			[
				{
					title:'ВзносыПоСотруднику',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачисленоСтраховая',
			style: 'position:absolute;left:149px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачисленоНакопительная',
			style: 'position:absolute;left:149px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УплаченоСтраховая',
			style: 'position:absolute;left:286px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УплаченоНакопительная',
			style: 'position:absolute;left:286px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:370px;top:0px;width:267px;height:42px;',
			height: 42,width: 267,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоначисленоСтраховая',
			style: 'position:absolute;left:79px;top:0px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоначисленоНакопительная',
			style: 'position:absolute;left:79px;top:23px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоУплаченоСтраховая',
			style: 'position:absolute;left:199px;top:0px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоУплаченоНакопительная',
			style: 'position:absolute;left:199px;top:23px;width:68px;height:19px;',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтраховойНомерПФР',
			style: 'position:absolute;left:422px;top:0px;width:100px;height:19px;',
		},
					]
				},
				{
					title:'ПустаяСтраница',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаОК',
			text: 'ОК',
			style: 'position:absolute;left:923px;top:542px;width:36px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Справка',
			text: '',
			style: 'position:absolute;left:961px;top:542px;width:23px;height:21px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:254px;top:22px;width:730px;height:120px;',
			height: 120,width: 730,
			items:
			[
				{
					title:'СтраницаАДВ',
					items:
					[
		{
			xtype: 'button',
			name: 'Печать',
			text: '&Печать',
			style: 'position:absolute;left:615px;top:49px;width:115px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПоказатьФайлы',
			text: 'Показать &файлы',
			style: 'position:absolute;left:615px;top:74px;width:115px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'НаДиск',
			text: 'Файлы на &диск',
			style: 'position:absolute;left:615px;top:99px;width:115px;height:21px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСоставления',
			style: 'position:absolute;left:274px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель',
			style: 'position:absolute;left:274px;top:24px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель',
			style: 'position:absolute;left:457px;top:0px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя',
			style: 'position:absolute;left:457px;top:24px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПачки',
			style: 'position:absolute;left:81px;top:0px;width:85px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:77px;width:591px;height:43px;',
			height: 43,width: 591,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'button',
			name: 'РаспределитьВзносыВоВсехПачках',
			text: 'Перераспределить взносы во всех пачках',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:43px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий3',
			style: 'position:absolute;left:274px;top:48px;width:323px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасчетСтраховыхВзносов',
			style: 'position:absolute;left:642px;top:0px;width:88px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ПроверитьКомплект',
			text: 'Проверить',
			style: 'position:absolute;left:615px;top:24px;width:115px;height:21px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:24px;width:173px;height:51px;',
			height: 51,width: 173,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаПринятоВПФР',
			text: 'Пометить все пачки как принятые ПФР',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:43px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ПустаяСтраница',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'ОформлениеПенсии',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаОК1',
			text: 'ОК',
			style: 'position:absolute;left:923px;top:542px;width:36px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Справка1',
			text: '',
			style: 'position:absolute;left:961px;top:542px;width:23px;height:21px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:155px;width:293px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеОбновить',
				},
				{
					text:'ПометитьНаУдаление',
				},
				{
					text:'Добавить',
				},
				{
					text:'ПринятоВПФР',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:179px;width:293px;height:102px;',
			height: 102,width: 293,
			columns:
			[
				{
					text:'Пачка',
				},
				{
					text:'КолонкаСтраховая',
				},
				{
					text:'НачисленоСтраховая',
				},
				{
					text:'УплаченоСтраховая',
				},
				{
					text:'КолонкаНакопительная',
				},
				{
					text:'НачисленоНакопительная',
				},
				{
					text:'УплаченоНакопительная',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:47px;width:333px;height:81px;',
			height: 81,width: 333,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ФизЛицо',
				},
				{
					text:'ДатаСоставленияСведений',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:22px;width:333px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаСформировать1',
			text: 'Сформировать сведения',
			style: 'position:absolute;left:344px;top:94px;width:192px;height:34px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:300px;top:154px;width:684px;height:127px;',
			height: 127,width: 684,
			items:
			[
				{
					title:'СтраницаДанных',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСоставления2',
			style: 'position:absolute;left:206px;top:31px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КатегорияЗастрахованныхЛиц1',
			style: 'position:absolute;left:206px;top:81px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель2',
			style: 'position:absolute;left:407px;top:81px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель2',
			style: 'position:absolute;left:407px;top:31px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя2',
			style: 'position:absolute;left:407px;top:56px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПачки2',
			style: 'position:absolute;left:206px;top:56px;width:100px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Проверить3',
			text: 'Проверить',
			style: 'position:absolute;left:576px;top:6px;width:108px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Печать3',
			text: 'Печать',
			style: 'position:absolute;left:576px;top:31px;width:108px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПоказатьФайл3',
			text: 'Показать файл',
			style: 'position:absolute;left:576px;top:56px;width:108px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'НаДиск3',
			text: 'Файл на диск',
			style: 'position:absolute;left:576px;top:81px;width:108px;height:21px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:31px;width:101px;height:77px;',
			height: 77,width: 101,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'button',
			name: 'РаспределитьВзносы1',
			text: '',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:71px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий1',
			style: 'position:absolute;left:206px;top:106px;width:361px;height:19px;',
		},
					]
				},
				{
					title:'ПустаяСтраница',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:310px;width:984px;height:224px;',
			height: 224,width: 984,
			items:
			[
				{
					title:'ДанныеФизлица',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:333px;height:200px;',
			height: 200,width: 333,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ФизЛицо',
				},
				{
					text:'СтраховойНомерПФР',
				},
				{
					text:'Фамилия',
				},
				{
					text:'Имя',
				},
				{
					text:'Отчество',
				},
				{
					text:'НачисленоСтраховая',
				},
				{
					text:'УплаченоСтраховая',
				},
				{
					text:'НачисленоНакопительная',
				},
				{
					text:'УплаченоНакопительная',
				},
				{
					text:'ДатаСоставления',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:333px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Перенести',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:347px;top:93px;width:637px;height:24px;',
			items:
			[
				{
					text:'Действие12',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие14',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие17',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие10',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие15',
				},
				{
					text:'Перезаполнить',
				},
				{
					text:'Действие16',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:347px;top:118px;width:637px;height:106px;',
			height: 106,width: 637,
			columns:
			[
				{
					text:'НевидимаяКолонка1',
				},
				{
					text:'ДатаНачалаПериода',
				},
				{
					text:'ДатаОкончанияПериода',
				},
				{
					text:'НевидимаяКолонка2',
				},
				{
					text:'ТерриториальныеУсловия',
				},
				{
					text:'ПараметрТерриториальныхУсловий',
				},
				{
					text:'НевидимаяКолонка3',
				},
				{
					text:'ОсобыеУсловияТруда',
				},
				{
					text:'КодПозицииСписка',
				},
				{
					text:'НевидимаяКолонка4',
				},
				{
					text:'ОснованиеИсчисляемогоСтажа',
				},
				{
					text:'ТретийПараметрИсчисляемогоСтажа',
				},
				{
					text:'НевидимаяКолонка5',
				},
				{
					text:'ПервыйПараметрИсчисляемогоСтажа',
				},
				{
					text:'ВторойПараметрИсчисляемогоСтажа',
				},
				{
					text:'НевидимаяКолонка6',
				},
				{
					text:'ОснованиеВыслугиЛет',
				},
				{
					text:'ПервыйПараметрВыслугиЛет',
				},
				{
					text:'ВторойПараметрВыслугиЛет',
				},
				{
					text:'ТретийПараметрВыслугиЛет',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:347px;top:24px;width:637px;height:50px;',
			height: 50,width: 637,
			items:
			[
				{
					title:'ВзносыПоСотруднику',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачисленоСтраховая1',
			style: 'position:absolute;left:223px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачисленоНакопительная1',
			style: 'position:absolute;left:223px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УплаченоСтраховая1',
			style: 'position:absolute;left:371px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УплаченоНакопительная1',
			style: 'position:absolute;left:371px;top:23px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтраховойНомерПФР1',
			style: 'position:absolute;left:422px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСоставленияФЛ',
			style: 'position:absolute;left:798px;top:0px;width:100px;height:19px;',
		},
					]
				},
				{
					title:'ПустаяСтраница',
				},
			]
		},
					]
				},
				{
					title:'СведенияОНачисленномЗаработке',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:25px;width:293px;height:24px;',
			items:
			[
				{
					text:'Добавить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПометитьНаУдаление',
				},
				{
					text:'ДействиеОбновить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:49px;width:293px;height:182px;',
			height: 182,width: 293,
			columns:
			[
				{
					text:'Пачка',
				},
				{
					text:'Заработок',
				},
				{
					text:'ОблагаетсяВзносами',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:305px;top:25px;width:679px;height:206px;',
			height: 206,width: 679,
			items:
			[
				{
					title:'СтраницаДанных',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСоставления3',
			style: 'position:absolute;left:99px;top:71px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КатегорияЗастрахованныхЛиц2',
			style: 'position:absolute;left:99px;top:96px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель3',
			style: 'position:absolute;left:99px;top:145px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель3',
			style: 'position:absolute;left:99px;top:121px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя3',
			style: 'position:absolute;left:389px;top:121px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПачки3',
			style: 'position:absolute;left:282px;top:71px;width:100px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Проверить4',
			text: 'Проверить пачку',
			style: 'position:absolute;left:549px;top:185px;width:130px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'РассчитатьЗаработок',
			text: 'Обновить данные о заработке',
			style: 'position:absolute;left:0px;top:171px;width:160px;height:35px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипДоговора',
			style: 'position:absolute;left:389px;top:96px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий2',
			style: 'position:absolute;left:389px;top:145px;width:200px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПринятоВПФР1',
			text: 'Пометить все пачки как принятые ПФР',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:33px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОписьАДВ62',
			style: 'position:absolute;left:476px;top:71px;width:113px;height:19px;',
		},
					]
				},
				{
					title:'ПустаяСтраница',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:264px;width:984px;height:270px;',
			height: 270,width: 984,
			items:
			[
				{
					title:'ДанныеФизлица',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:342px;height:245px;',
			height: 245,width: 342,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ФизЛицо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:342px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Перенести',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеОДоходах',
			text: 'Обновить',
			style: 'position:absolute;left:358px;top:248px;width:82px;height:21px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:358px;top:24px;width:329px;height:219px;',
			height: 219,width: 329,
			columns:
			[
				{
					text:'Месяц',
				},
				{
					text:'Заработок',
				},
				{
					text:'ОблагаетсяВзносами',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:777px;top:24px;width:207px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:777px;top:48px;width:207px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:777px;top:72px;width:207px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтраховойНомерПФР3',
			style: 'position:absolute;left:777px;top:96px;width:101px;height:19px;',
		},
					]
				},
				{
					title:'ПустаяСтраница',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаОК2',
			text: 'ОК',
			style: 'position:absolute;left:923px;top:542px;width:36px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Справка2',
			text: '',
			style: 'position:absolute;left:961px;top:542px;width:23px;height:21px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:197px;height:34px;',
			height: 34,width: 197,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаСформировать',
			text: 'Сформировать сведения',
			style: 'position:absolute;left:0px;top:0px;width:192px;height:34px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:479px;top:8px;width:112px;height:34px;',
			height: 34,width: 112,
			items:
			[
				{
					title:'СтраницаПериодПерсучета',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетныйПериод',
			style: 'position:absolute;left:0px;top:0px;width:112px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаОтчетныйГод',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетныйГод',
			style: 'position:absolute;left:0px;top:0px;width:112px;height:19px;',
		},
					]
				},
			]
		},
	]
});