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
			style: 'position:absolute;left:8px;top:8px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:264px;width:532px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сформировать документы',
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
			xtype: 'label',
			name: 'НадписьГраницаНачала',
			text: 'На дату: ',
			style: 'position:absolute;left:8px;top:32px;width:68px;height:19px;text-align:left;',
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
			tabBar:{hidden:true},
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
					text:'Установить пометки на все строки',
				},
				{
					text:'Убрать пометки всех строк',
				},
				'-',
				{
					text:'Провести документы',
				},
				{
					text:'Установить/снять пометку удаления',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:22px;top:121px;width:436px;height:24px;',
			items:
			[
				{
					text:'Установить пометки на все строки',
				},
				{
					text:'Убрать пометки всех строк',
				},
				'-',
				{
					text:'Провести документы',
				},
				{
					text:'Установить/снять пометку удаления',
				},
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Настройка списка...',
				},
				{
					text:'Вывести список...',
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