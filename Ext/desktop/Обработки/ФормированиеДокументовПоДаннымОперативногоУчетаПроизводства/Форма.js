Ext.define('Обработки.ФормированиеДокументовПоДаннымОперативногоУчетаПроизводства.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:532px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Формирование документов по данным оперативного учета производства',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'по:',
			style: 'position:absolute;left:158px;top:32px;width:18px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПериода',
			style: 'position:absolute;left:176px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНастройка',
			text: 'Настройка:',
			style: 'position:absolute;left:8px;top:8px;width:68px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:532px;height:25px;',
			items:
			[
				{
					text:'Сформировать документы',
				},
				'-',
				{
					text:'Справка',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьГраницаНачала',
			text: 'За период с: ',
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
			style: 'position:absolute;left:8px;top:59px;width:516px;height:200px;',
			height: 200,width: 516,
			items:
			[
				{
					title:'Сформированные документы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:502px;height:144px;',
			height: 144,width: 502,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'',
					width:'32',
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
					text:'Документ',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:502px;height:24px;',
			items:
			[
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Провести документы',
				},
				'-',
				{
					text:'Обновить',
				},
				{
					text:'Убрать пометки всех строк',
				},
				{
					text:'Печать',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Установить пометки на все строки',
				},
				'-',
				{
					text:'Установить/снять пометку удаления',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:20px;top:80px;width:436px;height:24px;',
			items:
			[
				'-',
				'-',
				{
					text:'Печать',
				},
				{
					text:'',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Провести документы',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Вывести список...',
				},
				'-',
				{
					text:'Настройка списка...',
				},
				{
					text:'Установить пометки на все строки',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'Отключить отбор',
				},
				{
					text:'Обновить',
				},
				{
					text:'Убрать пометки всех строк',
				},
				'-',
				{
					text:'Установить/снять пометку удаления',
				},
				{
					text:'&Переместить вверх',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Учтенные документы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:502px;height:144px;',
			height: 144,width: 502,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'',
					width:'32',
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
					text:'Документ',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:502px;height:24px;',
			items:
			[
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Установить/снять пометку удаления',
				},
				{
					text:'Установить пометки на все строки',
				},
				{
					text:'Убрать пометки всех строк',
				},
				{
					text:'Печать',
				},
				{
					text:'Провести документы',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:20px;top:80px;width:436px;height:24px;',
			items:
			[
				{
					text:'Провести документы',
				},
				'-',
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Установить пометки на все строки',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Настройка списка...',
				},
				{
					text:'Отключить отбор',
				},
				{
					text:'Обновить',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				'-',
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Убрать пометки всех строк',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'Установить/снять пометку удаления',
				},
				{
					text:'Вывести список...',
				},
				{
					text:'Печать',
				},
				{
					text:'Сортировать по возрастанию',
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
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:258px;top:32px;width:19px;height:19px;',
		},
	]
});