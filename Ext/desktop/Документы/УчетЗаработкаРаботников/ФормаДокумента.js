Ext.define('Документы.УчетЗаработкаРаботников.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:477px;height:428px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Учет заработка сотрудников',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:477px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
				'-',
				'-',
				'-',
				{
					text:'Списком сотрудников',
				},
				{
					text:'Редактировать номер',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Очистить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:376px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:376px;width:373px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:403px;width:477px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				'-',
				'-',
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:148px;width:461px;height:220px;',
			height: 220,width: 461,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'75',
				},
				{
					text:'Сотрудник',
					width:'100',
				},
				{
					text:'Дата',
					width:'78',
				},
				{
					text:'Способ отражения в упр учете',
					width:'160',
				},
				{
					text:'Учет начислений по организации',
					width:'100',
				},
				{
					text:'Подразделение',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:124px;width:461px;height:24px;',
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'Подбор',
				},
				{
					text:'&Скопировать',
				},
				'-',
				{
					text:'&Удалить',
				},
				{
					text:'Сортировать по возрастанию',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:57px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтветственныйЗаДокумент',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОснование',
			text: 'Основание:',
			style: 'position:absolute;left:8px;top:81px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснование',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
	]
});