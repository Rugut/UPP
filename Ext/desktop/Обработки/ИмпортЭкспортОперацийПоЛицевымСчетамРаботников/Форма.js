Ext.define('Обработки.ИмпортЭкспортОперацийПоЛицевымСчетамРаботников.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:482px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Импорт / экспорт операций по лицевым счетам сотрудников',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:457px;width:780px;height:25px;',
			items:
			[
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
			style: 'position:absolute;left:8px;top:8px;width:766px;height:429px;',
			height: 429,width: 766,
			items:
			[
				{
					title:'Экспорт заявок на открытие счетов',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаФормированияФайлов',
			style: 'position:absolute;left:120px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Дата формирования:',
			style: 'position:absolute;left:6px;top:30px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КаталогЭкспорта',
			style: 'position:absolute;left:120px;top:6px;width:442px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Каталог экспорта:',
			style: 'position:absolute;left:6px;top:6px;width:112px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:121px;width:752px;height:282px;',
			height: 282,width: 752,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Дата',
					width:'120',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Зарплатный счет',
					width:'160',
				},
				{
					text:'№ дог.',
					width:'60',
				},
				{
					text:'Вид вклада',
					width:'80',
				},
				{
					text:'Документ',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:97px;width:752px;height:24px;',
			items:
			[
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Установить интервал',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Выгрузить',
				},
				'-',
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только неисполненные',
			style: 'position:absolute;left:568px;top:54px;width:149px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтделениеБанка',
			text: 'Отделение:',
			style: 'position:absolute;left:222px;top:30px;width:68px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтделениеБанка',
			style: 'position:absolute;left:297px;top:30px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФилиалОтделенияБанка',
			text: 'Филиал:',
			style: 'position:absolute;left:222px;top:54px;width:52px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФилиалОтделенияБанка',
			style: 'position:absolute;left:297px;top:54px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтделениеБанка1',
			text: 'Номер с начала года:',
			style: 'position:absolute;left:6px;top:54px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСНачалаГода',
			style: 'position:absolute;left:120px;top:54px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодировка1',
			text: 'Кодировка файла:',
			style: 'position:absolute;left:568px;top:6px;width:94px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФорматФайла1',
			text: 'Формат файла:',
			style: 'position:absolute;left:568px;top:34px;width:91px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерРеестра',
			text: 'Номер реестра:',
			style: 'position:absolute;left:360px;top:31px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерРеестра',
			style: 'position:absolute;left:448px;top:31px;width:103px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРеестра',
			text: 'Дата реестра:',
			style: 'position:absolute;left:360px;top:55px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРеестра',
			style: 'position:absolute;left:448px;top:55px;width:103px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только неисполненные',
			style: 'position:absolute;left:569px;top:55px;width:149px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерРеестра1',
			text: 'Номер реестра:',
			style: 'position:absolute;left:360px;top:31px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерРеестра1',
			style: 'position:absolute;left:448px;top:31px;width:103px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРеестра1',
			text: 'Дата реестра:',
			style: 'position:absolute;left:360px;top:55px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРеестра1',
			style: 'position:absolute;left:448px;top:55px;width:103px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только неисполненные',
			style: 'position:absolute;left:569px;top:55px;width:149px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерРеестра2',
			text: 'Номер реестра:',
			style: 'position:absolute;left:360px;top:31px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерРеестра2',
			style: 'position:absolute;left:448px;top:31px;width:103px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРеестра2',
			text: 'Дата реестра:',
			style: 'position:absolute;left:360px;top:55px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРеестра2',
			style: 'position:absolute;left:448px;top:55px;width:103px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только неисполненные',
			style: 'position:absolute;left:569px;top:55px;width:149px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерРеестра3',
			text: 'Номер реестра:',
			style: 'position:absolute;left:360px;top:31px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерРеестра3',
			style: 'position:absolute;left:448px;top:31px;width:103px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРеестра3',
			text: 'Дата реестра:',
			style: 'position:absolute;left:360px;top:55px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРеестра3',
			style: 'position:absolute;left:448px;top:55px;width:103px;height:19px;',
		},
					]
				},
				{
					title:'Экспорт зачисления зарплаты',
					items:
					[
		{
			xtype: 'label',
			name: 'НомерДоговора',
			text: 'Номер договора:',
			style: 'position:absolute;left:351px;top:54px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДоговораЗачисленияЗарплаты',
			style: 'position:absolute;left:456px;top:54px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаФормированияЗачислениеЗарплаты',
			style: 'position:absolute;left:120px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Дата формирования:',
			style: 'position:absolute;left:6px;top:30px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КаталогЭкспортаЗачислениеЗарплаты',
			style: 'position:absolute;left:120px;top:6px;width:442px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Каталог экспорта:',
			style: 'position:absolute;left:6px;top:6px;width:112px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:97px;width:752px;height:24px;',
			items:
			[
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Установить интервал',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Выгрузить',
				},
				'-',
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:121px;width:752px;height:282px;',
			height: 282,width: 752,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Вид документа',
					width:'100',
				},
				{
					text:'Дата',
					width:'120',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Сумма',
					width:'100',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Счет',
					width:'100',
				},
				{
					text:'№ счета',
					width:'160',
				},
				{
					text:'Документ',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтделениеБанка2',
			text: 'Отделение:',
			style: 'position:absolute;left:222px;top:30px;width:68px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтделениеБанкаЗЗ',
			style: 'position:absolute;left:297px;top:30px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФилиалОтделенияБанка1',
			text: 'Филиал:',
			style: 'position:absolute;left:222px;top:54px;width:52px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФилиалОтделенияБанкаЗЗ',
			style: 'position:absolute;left:297px;top:54px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтделениеБанка3',
			text: 'Номер с начала года:',
			style: 'position:absolute;left:6px;top:54px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСНачалаГодаЗЗ',
			style: 'position:absolute;left:120px;top:54px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодировка2',
			text: 'Кодировка файла:',
			style: 'position:absolute;left:568px;top:6px;width:94px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФорматФайла',
			text: 'Формат файла:',
			style: 'position:absolute;left:568px;top:30px;width:91px;height:19px;',
		},
					]
				},
				{
					title:'Импорт',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КаталогИмпорта',
			style: 'position:absolute;left:103px;top:6px;width:655px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Каталог импорта:',
			style: 'position:absolute;left:6px;top:7px;width:95px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:48px;width:752px;height:24px;',
			items:
			[
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Установить интервал',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				{
					text:'Загрузить',
				},
				'-',
				{
					text:'Лицевые счета',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:72px;width:752px;height:331px;',
			height: 331,width: 752,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Файл',
					width:'320',
				},
				{
					text:'Дата',
					width:'120',
				},
				{
					text:'Дата операции',
					width:'120',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:408px;top:11px;width:193px;height:48px;',
			height: 48,width: 193,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Документ',
					width:'220',
				},
				{
					text:'Операция',
					width:'120',
				},
				{
					text:'Сотрудник',
					width:'120',
				},
				{
					text:'Лицевой счет',
					width:'120',
				},
				{
					text:'Сумма',
					width:'120',
				},
				{
					text:'Результат',
					width:'120',
				},
				{
					text:'Фамилия',
					width:'100',
				},
				{
					text:'Имя',
					width:'100',
				},
				{
					text:'Отчество',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Протоколы обмена',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:750px;height:373px;',
			height: 373,width: 750,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Документ',
					width:'100',
				},
				{
					text:'Дата',
					width:'140',
				},
				{
					text:'Содержание',
					width:'452',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:752px;height:24px;',
			items:
			[
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
					]
				},
			]
		},
	]
});