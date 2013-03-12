Ext.define('Документы.ИзменениеУсловийОплатыОтпускаПоУходуЗаРебенком.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменение условий оплаты отпуска по уходу за ребенком',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:764px;height:356px;',
			height: 356,width: 764,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'132',
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
					text:'Сотрудник',
					width:'121',
				},
				{
					text:'Отпуск',
					width:'120',
				},
				{
					text:'Действие',
					width:'100',
				},
				{
					text:'Дата изменения',
					width:'100',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие9',
				},
				'-',
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие10',
				},
				'-',
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие14',
				},
				'-',
				'-',
				'-',
				{
					text:'',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:19px;',
			height: 19,width: 764,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:87px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:92px;top:0px;width:220px;height:19px;',
		},
					]
				},
			]
		},
	]
});