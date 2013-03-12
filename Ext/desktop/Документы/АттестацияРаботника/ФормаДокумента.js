Ext.define('Документы.АттестацияРаботника.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:424px;height:328px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Аттестация сотрудника',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Сотрудник:',
			style: 'position:absolute;left:8px;top:81px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтветственныйЗаАттестацию',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:124px;width:408px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Текущая должность',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие8',
				},
				{
					text:'Анкета',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:148px;width:408px;height:120px;',
			height: 120,width: 408,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Компетенция',
					width:'220',
				},
				{
					text:'Оценка',
					width:'78',
				},
				{
					text:'Дата оценки',
					width:'82',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:424px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Редактировать номер',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:303px;width:424px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				{
					text:'Записать',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:276px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:276px;width:322px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
			height: 19,width: 220,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:0px;top:0px;width:220px;height:19px;',
		},
					]
				},
			]
		},
	]
});