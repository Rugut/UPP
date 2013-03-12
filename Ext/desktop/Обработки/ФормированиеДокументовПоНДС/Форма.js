Ext.define('Обработки.ФормированиеДокументовПоНДС.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:532px;height:289px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Формирование документов по НДС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНастройка',
			text: 'Настройка:',
			style: 'position:absolute;left:8px;top:8px;width:68px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:264px;width:532px;height:25px;',
			items:
			[
				{
					text:'Сформировать документы',
				},
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьГраницаНачала',
			text: 'На дату: ',
			style: 'position:absolute;left:8px;top:32px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаПериода',
			style: 'position:absolute;left:76px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:56px;width:516px;height:200px;',
			height: 200,width: 516,
			items:
			[
				{
					title:'Сформированные документы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:50px;width:502px;height:144px;',
			height: 144,width: 502,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'',
					width:'25',
				},
				{
					text:'',
					width:'31',
				},
				{
					text:'Документ',
					width:'101',
				},
				{
					text:'Номер',
					width:'100',
				},
				{
					text:'Дата',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:26px;width:502px;height:24px;',
			items:
			[
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Установить пометки на все строки',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				'-',
				'-',
				{
					text:'Обновить',
				},
				{
					text:'Установить/снять пометку удаления',
				},
				{
					text:'Убрать пометки всех строк',
				},
				'-',
				{
					text:'Провести документы',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:22px;top:121px;width:436px;height:24px;',
			items:
			[
				{
					text:'Убрать пометки всех строк',
				},
				{
					text:'&Переместить вверх',
				},
				'-',
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'Сортировать по возрастанию',
				},
				'-',
				'-',
				{
					text:'Настройка списка...',
				},
				{
					text:'Вывести список...',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Установить пометки на все строки',
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Установить/снять пометку удаления',
				},
				'-',
				{
					text:'&Переместить вниз',
				},
				{
					text:'',
				},
				{
					text:'Провести документы',
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'Обновить',
				},
				{
					text:'Отбор по значению в текущей колонке',
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
			name: 'Настройка',
			style: 'position:absolute;left:76px;top:8px;width:448px;height:19px;',
		},
	]
});