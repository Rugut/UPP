Ext.define('Отчеты.СведенияОРасходахНаПроизводствоИПродажуПродукции.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:820px;height:558px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сведения о расходах на производство и продажу продукции (товаров, работ и услуг)',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:1px;width:820px;height:46px;',
			height: 46,width: 820,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоПериода',
			style: 'position:absolute;left:8px;top:20px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонецПериода',
			style: 'position:absolute;left:98px;top:20px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период:',
			style: 'position:absolute;left:8px;top:0px;width:57px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: '—',
			style: 'position:absolute;left:88px;top:20px;width:10px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:182px;top:20px;width:19px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:212px;top:0px;width:74px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:2px;top:47px;width:490px;height:26px;',
			items:
			[
				'-',
				'-',
				{
					text:'Выгрузить в файл',
				},
				{
					text:'Сформировать отчет',
				},
				'-',
				{
					text:'Сохранить как...',
				},
				{
					text:'Печать...',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:561px;top:47px;width:256px;height:25px;',
			items:
			[
				{
					text:'Сохранить настройки отчета',
				},
				{
					text:'Идентификация по ОКПД',
				},
				{
					text:'Настройка',
				},
				{
					text:'Действие1',
				},
				{
					text:'Загрузить настройки отчета',
				},
				'-',
				{
					text:'Коды ОКПД',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:514px;top:73px;width:306px;height:485px;',
			height: 485,width: 306,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:27px;width:306px;height:458px;',
			height: 458,width: 306,
			items:
			[
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:292px;height:115px;',
			height: 115,width: 292,
			columns:
			[
				{
					text:'',
					width:'22',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'100',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'100',
				},
				{
					text:'Режим отображения',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Режим отображения',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Режим отображения',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:292px;height:24px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
			]
		},
					]
				},
				{
					title:'Редактирование параметров',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:29px;width:292px;height:137px;',
			height: 137,width: 292,
			columns:
			[
				{
					text:'',
					width:'22',
				},
				{
					text:'Параметр',
					width:'132',
				},
				{
					text:'Значение',
					width:'136',
				},
				{
					text:'Параметр',
					width:'134',
				},
				{
					text:'Значение',
					width:'67',
				},
				{
					text:'Дата',
					width:'67',
				},
				{
					text:'Дата начала',
					width:'134',
				},
				{
					text:'Дата окончания',
					width:'134',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить забалансовые счета',
			style: 'position:absolute;left:5px;top:6px;width:292px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:2px;width:297px;height:24px;',
			items:
			[
				{
					text:'Восстановить',
				},
				'-',
				{
					text:'ЗакрытьПанельНастроек',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Панель настроек',
			style: 'position:absolute;left:6px;top:5px;width:91px;height:18px;',
		},
					]
				},
			]
		},
	]
});