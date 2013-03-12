Ext.define('Справочники.Вакансии.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:769px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Вакансии',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:58px;width:753px;height:234px;',
			height: 234,width: 753,
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
					text:'Организация',
					width:'100',
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
					text:'Закрыть до',
					width:'80',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:269px;top:33px;width:492px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Организация:',
			style: 'position:absolute;left:178px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:769px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие формы выбрать',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});