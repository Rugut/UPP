Ext.define('Документы.ВводПостоянногоНачисленияИлиУдержанияСотрудникамОрганизации.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Постоянные начисления или удержания сотрудникам организации',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:984px;height:356px;',
			height: 356,width: 984,
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
					text:'Сотрудники',
					width:'100',
				},
				{
					text:'Действие',
					width:'150',
				},
				{
					text:'Вид расчета',
					width:'135',
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
					text:'Комментарий',
					width:'120',
				},
				{
					text:'Ответственный',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие7',
				},
				'-',
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие11',
				},
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие12',
				},
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие9',
				},
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие14',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие13',
				},
				'-',
				{
					text:'Действие6',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:984px;height:19px;',
			height: 19,width: 984,
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