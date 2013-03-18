Ext.define('Документы.ПриемНаРаботуВОрганизацию.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:690px;height:482px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Прием на работу в организацию',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:58px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:430px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:430px;width:586px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:268px;top:457px;width:422px;height:25px;',
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
			name: 'Надпись2',
			text: 'Ответственный:',
			style: 'position:absolute;left:374px;top:58px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:462px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:690px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:85px;width:674px;height:300px;',
			height: 300,width: 674,
			items:
			[
				{
					title:'Сотрудники',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:660px;height:250px;',
			height: 250,width: 660,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'68',
				},
				{
					text:'Сотрудник',
					width:'120',
				},
				{
					text:'Подразделение',
					width:'120',
				},
				{
					text:'Должность',
					width:'120',
				},
				{
					text:'Ставка',
					width:'60',
				},
				{
					text:'Дата приема',
					width:'92',
				},
				{
					text:'По',
					width:'60',
				},
				{
					text:'Испытательный срок',
					width:'80',
				},
				{
					text:'Условия приема на работу',
					width:'80',
				},
				{
					text:'График работы',
					width:'120',
				},
				{
					text:'Сторно',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:660px;height:24px;',
			items:
			[
				{
					text:'Сотрудниками',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:79px;top:161px;width:389px;height:24px;',
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
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
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
					text:'',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
			]
		},
					]
				},
				{
					title:'Начисления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:660px;height:250px;',
			height: 250,width: 660,
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
					text:'Вид расчета',
					width:'120',
				},
				{
					text:'Показатели для расчета начисления',
					width:'205',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер',
					width:'80',
				},
				{
					text:'Валюта',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'80',
				},
				{
					text:'Тарифный разряд',
					width:'125',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер 2',
					width:'80',
				},
				{
					text:'Валюта 2',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'80',
				},
				{
					text:'Тарифный разряд 2',
					width:'125',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер 3',
					width:'80',
				},
				{
					text:'Валюта 3',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'80',
				},
				{
					text:'Тарифный разряд 3',
					width:'125',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер 4',
					width:'80',
				},
				{
					text:'Валюта 4',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'80',
				},
				{
					text:'Тарифный разряд 4',
					width:'125',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер 5',
					width:'80',
				},
				{
					text:'Валюта 5',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'80',
				},
				{
					text:'Тарифный разряд 5',
					width:'125',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер 6',
					width:'80',
				},
				{
					text:'Валюта 6',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'80',
				},
				{
					text:'Тарифный разряд 6',
					width:'125',
				},
				{
					text:'Сторно',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:660px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:18px;top:143px;width:389px;height:24px;',
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
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
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
					text:'',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:30px;top:391px;width:439px;height:33px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:469px;top:391px;width:83px;height:33px;',
			height: 33,width: 83,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОткрытьИсправление',
			text: 'Открыть исправления',
			style: 'position:absolute;left:0px;top:0px;width:71px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:553px;top:391px;width:129px;height:33px;',
			height: 33,width: 129,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОткрытьИсходный',
			text: 'Открыть исправленный документ',
			style: 'position:absolute;left:0px;top:0px;width:129px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:457px;width:268px;height:25px;',
			items:
			[
				'-',
				{
					text:'Отменить исправление',
				},
			]
		},
	]
});