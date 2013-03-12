Ext.define('Документы.РегистрацияПростоевРаботниковОрганизаций.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:532px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистрации простоев в организациях',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:516px;height:235px;',
			height: 235,width: 516,
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
					width:'180',
				},
				{
					text:'Сотрудник',
					width:'179',
				},
				{
					text:'Дата начала',
					width:'84',
				},
				{
					text:'Дата окончания',
					width:'84',
				},
				{
					text:'Месяц начисления',
					width:'84',
				},
				{
					text:'Вид простоя',
					width:'120',
				},
				{
					text:'Ответственный',
					width:'180',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:532px;height:25px;',
			items:
			[
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Печать',
				},
				'-',
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие7',
				},
				'-',
				'-',
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие14',
				},
				'-',
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:516px;height:19px;',
			height: 19,width: 516,
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