Ext.define('Справочники.ГруппыДоступаФизическихЛиц.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группы доступа физических лиц',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:233px;height:259px;',
			height: 259,width: 233,
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
					width:'175',
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
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'Действие10',
				},
				{
					text:'',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие15',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие4',
				},
				{
					text:'Редактировать код номер',
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
				'-',
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие13',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие16',
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
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'Действие13',
				},
				'-',
				{
					text:'Действие5',
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
					text:'Действие2',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие12',
				},
			]
		},
	]
});