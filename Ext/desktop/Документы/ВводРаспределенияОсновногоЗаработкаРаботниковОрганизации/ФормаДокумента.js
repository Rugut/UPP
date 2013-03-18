Ext.define('Документы.ВводРаспределенияОсновногоЗаработкаРаботниковОрганизации.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:475px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод распределения основного заработка сотрудников',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:58px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:423px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:423px;width:506px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:83px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:83px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:245px;width:592px;height:24px;',
			items:
			[
				'-',
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
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
				{
					text:'По работнику',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:269px;width:592px;height:149px;',
			height: 149,width: 592,
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
					text:'Бух. учет',
					width:'120',
				},
				{
					text:'% доли распределения',
					width:'88',
				},
				{
					text:'ЕНВД',
					width:'42',
				},
				{
					text:'Счет ДТ',
					width:'110',
				},
				{
					text:'Субконто',
					width:'120',
				},
				{
					text:'Субконто2',
					width:'100',
				},
				{
					text:'Субконто3',
					width:'100',
				},
				{
					text:'Способ распределения затрат',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Редактировать номер',
				},
					]
				},
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
				'-',
				{
					text:'Действие открыть свойства',
				},
				{
					text:'Действие открыть категории',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:450px;width:608px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
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
			name: 'НадписьПериод',
			text: 'Месяц:',
			style: 'position:absolute;left:438px;top:33px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:480px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:145px;width:592px;height:78px;',
			height: 78,width: 592,
			columns:
			[
				{
					text:'Таб. №',
					width:'48',
				},
				{
					text:'Сотрудник',
					width:'223',
				},
				{
					text:'Физлицо',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:121px;width:592px;height:24px;',
			items:
			[
				{
					text:'Списком работников',
				},
			]
		},
	]
});