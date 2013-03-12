Ext.define('Справочники.СотрудникиОрганизаций.ФормаСпискаТрудовыхДоговоров',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:707px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Трудовые договоры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:691px;height:296px;',
			height: 296,width: 691,
			columns:
			[
				{
					text:'',
					width:'33',
				},
				{
					text:'Дата',
					width:'80',
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
					width:'120',
				},
				{
					text:'Подразделение',
					width:'120',
				},
				{
					text:'Должность',
					width:'120',
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
					text:'Испытательный срок',
					width:'113',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:707px;height:25px;',
			items:
			[
				{
					text:'Действие16',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие15',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие13',
				},
				'-',
				'-',
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				'-',
				{
					text:'&Добавить (Новый сотрудник)',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Печать',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Действие14',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:97px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:87px;height:19px;',
		},
	]
});