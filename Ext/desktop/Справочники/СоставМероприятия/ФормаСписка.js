Ext.define('Справочники.СоставМероприятия.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:485px;height:288px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Состав мероприятия',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:60px;width:469px;height:220px;',
			height: 220,width: 469,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'80',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Начало',
					width:'132',
				},
				{
					text:'Окончание',
					width:'132',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:485px;height:25px;',
			items:
			[
				{
					text:'Действие9',
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
					text:'Действие17',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие12',
				},
				'-',
				{
					text:'Действие20',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие16',
				},
				'-',
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие21',
				},
				'-',
				{
					text:'Действие19',
				},
				{
					text:'Действие18',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие13',
				},
				'-',
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Мероприятие',
			style: 'position:absolute;left:88px;top:32px;width:389px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Мероприятие:',
			style: 'position:absolute;left:8px;top:32px;width:80px;height:20px;',
		},
	]
});