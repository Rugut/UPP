Ext.define('Справочники.ГруппыДоступаФизическихЛиц.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:614px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группы доступа физических лиц',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:447px;height:259px;',
			height: 259,width: 447,
			columns:
			[
				{
					text:'',
					width:'33',
				},
				{
					text:'Код',
					width:'42',
				},
				{
					text:'Наименование',
					width:'340',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:145px;height:259px;',
			height: 259,width: 145,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:614px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие14',
				},
				{
					text:'',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие16',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Доступ к текущему элементу',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие15',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Доступ к справочнику в целом',
				},
				{
					text:'Действие17',
				},
				'-',
				{
					text:'Редактировать код номер',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие10',
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
					text:'Действие9',
				},
				'-',
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});